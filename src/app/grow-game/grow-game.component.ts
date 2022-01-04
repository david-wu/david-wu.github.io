import {ViewChild} from '@angular/core'
import * as PIXI from 'pixi.js'
import {keyBy, mapValues, each, uniqueId} from 'lodash';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  NgZone,
} from '@angular/core';
import {LandGenerator} from './land-generator';
import {ResourceLoader} from './resource-loader';
import {PlayerController} from './player-controller';
import {SpriteState} from './sprite-state';
import {SpriteStateController} from './sprite-state-controller';
import {InputStateBinder} from './input-state-binder';
import {MenuComponent} from './menu-component';

import {GameState} from './game-state';

interface Vector {
  x: number;
  y: number;
}

@Component({
  selector: 'dwu-grow-game',
  templateUrl: './grow-game.component.html',
  styleUrls: ['./grow-game.component.scss']
})
export class GrowGameComponent {
  @ViewChild('gameEl', {static: true}) gameEl;

  constructor(private zone: NgZone) {}

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      this.mountGame(this.gameEl.nativeElement);      
    })
  }

  async mountGame(element) {
    const app = new PIXI.Application({
      width: 960,
      height: 640,
    });
    element.appendChild(app.view);

    const gameState = new GameState();
    InputStateBinder.bindElement(element, gameState.playerInput);
    const textureList = await ResourceLoader.loadTextures();
    const overlayContainer = new PIXI.Container();
    const worldContainer = new PIXI.Container();

    // const backDrop = new PIXI.TilingSprite(textureList[20], 30 * 32, 20 * 32);
    // worldContainer.addChild(backDrop);

    const initialSpriteStateList = [
      ['player', {
        x: app.renderer.width / 2,
        y: app.renderer.height / 2,
        cameraAttractor: true,
        lastClickTick: 0,
      }],
      ['monster', {
        x: (app.renderer.width / 2) + 50,
        y: (app.renderer.height / 2) + 50,
      }],
      ['chicken', {
        x: (app.renderer.width / 2) + 100,
        y: (app.renderer.height / 2) + 100,
      }],
    ];

    const landGenerator = new LandGenerator(textureList);
    worldContainer.addChild(landGenerator.landContainer);

    const seededMap = landGenerator.createSeededMap();
    landGenerator.addSeededMapAttachment(seededMap, 0);
    
    const backgroundGrid = landGenerator.createBackgroundGrid();
    const backgroundContainer = this.getContainer(textureList, backgroundGrid, 32);
    worldContainer.addChild(backgroundContainer);

    const spriteStateController = new SpriteStateController(new PIXI.Container(), textureList);
    spriteStateController.addSprites(initialSpriteStateList);
    worldContainer.addChild(spriteStateController.spriteContainer);

    const menuComponent = new MenuComponent(textureList, gameState);
    overlayContainer.addChild(menuComponent.menuContainer);

    app.stage.addChild(worldContainer);
    app.stage.addChild(overlayContainer);

    let tick = 0;
    app.ticker.add(() => {
      tick++;

      each(spriteStateController.spriteStateById, (spriteState) => {

        if (spriteState.expires <= tick) {
          spriteStateController.removeSprite(spriteState.id);
          return;
        }

        if (spriteState.playerControlled) {
          PlayerController.updateSpriteState(spriteState, gameState.playerInput, tick);
        }

        this.applyMovement(spriteState);
        this.applyDrag(spriteState);
        this.setDirection(spriteState);

        const sprite = spriteStateController.spritesById[spriteState.id];
        sprite.x = Math.round(spriteState.x);
        sprite.y = Math.round(spriteState.y);

        const collider = spriteStateController.colliderById[spriteState.id];
        collider.pos.x = spriteState.x;
        collider.pos.y = spriteState.y;

        if (spriteState.isClickTick) {
          const directionalVector = {
            x: (gameState.playerInput.x - worldContainer.x) - spriteState.x,
            y: (gameState.playerInput.y - worldContainer.y) - spriteState.y,
          };
          const projectileVector = this.scaleMagnitude(directionalVector, 70);
          const projectileStartingRadius = (Math.max(sprite.width, sprite.height) / 2) + 2;
          const projectileOffsetVector = this.scaleMagnitude(directionalVector, projectileStartingRadius);
          const daggerSprite = spriteStateController.addSprite('dagger', {
            x: spriteState.x + projectileOffsetVector.x,
            y: spriteState.y + projectileOffsetVector.y,
            vx: spriteState.vx + projectileVector.x,
            vy: spriteState.vy + projectileVector.y,
            spriteNumber: 2883,
            scaleX: 1.2,
            scaleY: 1.2,
            expires: tick + 30,
          });
          spriteState.lastClickTick = tick;
          spriteState.isClickTick = false
        }

        if (spriteState.cameraAttractor) {
          worldContainer.x = Math.round((app.renderer.width * 0.5) - spriteState.x);
          worldContainer.y = Math.round((app.renderer.height * 0.5) - spriteState.y);
        }
      });

      spriteStateController.collisionSystem.update();
      spriteStateController.collisionSystem.checkAll((collision) => {
        const spriteId1 = spriteStateController.spriteIdByCollider.get(collision.a);
        const spriteId2 = spriteStateController.spriteIdByCollider.get(collision.b);
        const spriteState1 = spriteStateController.spriteStateById[spriteId1];
        const spriteState2 = spriteStateController.spriteStateById[spriteId2];
        spriteState1.vx -= (collision.overlapV.x / 2);
        spriteState1.vy -= (collision.overlapV.y / 2);
        spriteState2.vx += (collision.overlapV.x / 2);
        spriteState2.vy += (collision.overlapV.y / 2);
      });
    });
  }

  applyMovement(spriteState) {
    spriteState.y += (spriteState.vy * 0.1);
    spriteState.x += (spriteState.vx * 0.1);
  }

  applyDrag(spriteState, constant = 0.1, linear = 0.05) {
    if (spriteState.vy > 0) {
      spriteState.vy -= (spriteState.vy * linear);
      spriteState.vy = Math.max(0, spriteState.vy - constant);
    }
    if (spriteState.vy < 0) {
      spriteState.vy -= (spriteState.vy * linear);
      spriteState.vy = Math.min(0, spriteState.vy + constant);
    }
    if (spriteState.vx > 0) {
      spriteState.vx -= (spriteState.vx * linear);
      spriteState.vx = Math.max(0, spriteState.vx - constant);
    }
    if (spriteState.vx < 0) {
      spriteState.vx -= (spriteState.vx * linear);
      spriteState.vx = Math.min(0, spriteState.vx + constant);
    }
  }

  setDirection(spriteState) {
    if(spriteState.vx > 0) {
      spriteState.direction = 'right';
    } else if(spriteState.vx < 0) {
      spriteState.direction = 'left';
    }
    if (Math.abs(spriteState.vx) < Math.abs(spriteState.vy)) {
      if(spriteState.vy > 0) {
        spriteState.direction = 'down';
      } else if(spriteState.vy < 0) {
        spriteState.direction = 'up';
      }
    }
  }

  scaleMagnitude(vector: Vector, maxMag: number) {
    const mag = Math.pow(Math.pow(vector.x, 2) + Math.pow(vector.y, 2), 0.5);
    const magAdjustment = mag / maxMag;
    return {
      x: vector.x / magAdjustment,
      y: vector.y / magAdjustment,      
    };
  }

  getContainer(tileSet, map, tileSize = 16) {
    const container = new PIXI.Container();
    for(let i = 0; i < map.length; i++) {
      const row = map[i];
      for(let j = 0; j < row.length; j++) {
        const tileValue = map[i][j];
        const sprite = new PIXI.Sprite(tileSet[tileValue]);
        sprite.y = i * tileSize;
        sprite.x = j * tileSize;
        container.addChild(sprite);
      }
    }
    return container;
  }

}

