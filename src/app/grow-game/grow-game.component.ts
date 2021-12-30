import {ViewChild} from '@angular/core'
import * as PIXI from 'pixi.js'
import {keyBy, mapValues, each, uniqueId} from 'lodash';
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {LandGenerator} from './land-generator';
import {ResourceLoader} from './resource-loader';
import {PlayerController} from './player-controller';
import {SpriteState} from './sprite-state';
import {SpriteStateController} from './sprite-state-controller';
import {InputStateBinder} from './input-state-binder';

@Component({
  selector: 'dwu-grow-game',
  templateUrl: './grow-game.component.html',
  styleUrls: ['./grow-game.component.scss']
})
export class GrowGameComponent {
  @ViewChild('gameEl', {static: true}) gameEl;

  ngAfterViewInit() {
    this.mountGame(this.gameEl.nativeElement);
  }

  async mountGame(element) {
    const app = new PIXI.Application({
      width: 960,
      height: 640,
    });
    element.appendChild(app.view);
    const playerInputState = InputStateBinder.bindElement(element);
    const {resources} = await ResourceLoader.loadResources();

    const textures = await ResourceLoader.loadTextures();
    const tileSet = [
      ...this.splitTextureSet(resources.hyp1.texture, 32, 30, 30),
      ...this.splitTextureSet(resources.hyp2.texture, 32, 30, 30),
      ...this.splitTextureSet(resources.hyp3.texture, 32, 30, 30),
      ...this.splitTextureSet(resources.rpgItems.texture, 16, 13, 14),
    ];
    const availableSprites = [
      ...this.splitTextureSet(resources.characters.texture, 32, 23, 4),
      ...this.splitTextureSet(resources.rpgItems.texture, 16, 13, 14),
    ];

    const backDrop = new PIXI.TilingSprite(tileSet[20], 30 * 32, 20 * 32);

    const initialSpriteStateList = [
      ['player', {
        x: app.renderer.width / 2,
        y: app.renderer.height / 2,
        cameraAttractor: true,
        lastActionTick: 0,
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
    const characterContainer = new PIXI.Container();
    const spriteStateController = new SpriteStateController(characterContainer, availableSprites);
    spriteStateController.addSprites(initialSpriteStateList);

    const backgroundGrid = LandGenerator.createBackgroundGrid();
    const backgroundContainer = this.getContainer(tileSet, backgroundGrid, 32);

    app.stage.addChild(backDrop);
    app.stage.addChild(characterContainer);
    app.stage.addChild(backgroundContainer);

    const playerSpriteState = spriteStateController.playerControlledSpriteState || {};
    let tick = 0;
    app.ticker.add(() => {
      tick++;
      each(spriteStateController.spriteStateById, (spriteState) => {
        if (spriteState.playerControlled) {
          PlayerController.updateCharacterData(spriteState, playerInputState, tick);
        }
        if (playerInputState.mouseDown && ((tick - playerSpriteState.lastActionTick) > 100) ) {
          spriteStateController.addSprite('monster', {
            x: playerSpriteState.x,
            y: playerSpriteState.y,
            vx: playerSpriteState.vx + 40,
            vy: playerSpriteState.vy,
            spriteNumber: 183,
            scaleX: 2,
            scaleY: 2,
          });
          playerSpriteState.lastActionTick = tick;
        }
        if (spriteState.cameraAttractor) {
          app.stage.x = (app.renderer.width * 0.5) - spriteState.x;
          app.stage.y = (app.renderer.height * 0.5) - spriteState.y;
        }

        // collides

        // expires

        // moveable
        const sprite = spriteStateController.spritesById[spriteState.id];
        sprite.x = spriteState.x;
        sprite.y = spriteState.y;
        spriteState.y += (spriteState.vy * 0.1);
        spriteState.x += (spriteState.vx * 0.1);
        // hasDrag
        if (spriteState.vy > 0) {
          spriteState.vy -= 1;        
        }
        if (spriteState.vy < 0) {
          spriteState.vy += 1;        
        }
        if (spriteState.vx > 0) {
          spriteState.vx -= 1;        
        }
        if (spriteState.vx < 0) {
          spriteState.vx += 1;        
        }

      });
    });
  }

  splitTextureSet(tileSetImgTexture, tileSize = 16, width, height) {
    const tileSet = [];
    for(let i = 0; i < width * height; i++) {
      const x = i % width;
      const y = Math.floor(i / width);
      tileSet[i] = new PIXI.Texture(
        tileSetImgTexture,
        new PIXI.Rectangle(x * tileSize, y * tileSize, tileSize, tileSize)
      );
    }
    return tileSet;
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

