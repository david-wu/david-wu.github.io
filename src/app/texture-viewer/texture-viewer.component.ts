import {ElementRef} from '@angular/core'
import * as PIXI from 'pixi.js'
import {keyBy, mapValues, each, uniqueId} from 'lodash';
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {System} from 'detect-collisions';

import {ResourceLoader} from '@src/app/grow-game/resource-loader';
import {InputStateBinder} from '@src/app/grow-game/input-state-binder';

// PIXI.settings.RESOLUTION = window.devicePixelRatio;
PIXI.settings.ROUND_PIXELS = true;


@Component({
  selector: 'dwu-texture-viewer',
  templateUrl: './texture-viewer.component.html',
  styleUrls: ['./texture-viewer.component.scss']
})
export class TextureViewerComponent {

  collisionSystem = new System();
  spriteIndexByCollisionBox = new Map();
  selectedSpriteIndex = undefined;

  constructor(public hostEl: ElementRef) {}

  ngAfterViewInit() {
    this.mountGame(this.hostEl.nativeElement);
  }

  async mountGame(element) {
    const app = new PIXI.Application({
      width: 960,
      height: 640,
      backgroundColor: 0xFFFFFF,
    });
    element.appendChild(app.view);
    const playerInputState = InputStateBinder.bindElement(element);
    const textureContainerState = {
      x: 0,
      y: 0,
      width: 960,
      height: 640,
    };
    const textures = await ResourceLoader.loadTextures();

    const textureContainer = new PIXI.Container();
    for(let i = 0; i < textures.length; i++) {
      const column = i % 30;
      const row = Math.floor(i / 30);
      const sprite = new PIXI.Sprite(textures[i]);
      sprite.x = column * 32;
      sprite.y = row * 32;
      const box = this.collisionSystem.createBox(
        { x: sprite.x + 1, y: sprite.y + 1 },
        32 - 1,
        32 - 1,
      );
      this.spriteIndexByCollisionBox.set(box, i);
      textureContainer.addChild(sprite);
    }
    app.stage.addChild(textureContainer);

    const {menuContainer, menuSprite, menuText} = this.drawMenu()
    menuContainer.y = 640 - menuContainer.height;
    app.stage.addChild(menuContainer);

    const playerMouse = this.collisionSystem.createPoint({
      x: -1,
      y: -1,
    });
    app.ticker.add(() => {
      textureContainerState.y += playerInputState.wheelYValue;
      playerInputState.wheelYValue = 0;
      if(playerInputState.down) {
        textureContainerState.y -= 2;
      }
      if(playerInputState.up) {
        textureContainerState.y += 2;
      }
      textureContainerState.y = Math.min(textureContainerState.y, 0);

      textureContainer.x = textureContainerState.x;
      textureContainer.y = textureContainerState.y;

      if(playerInputState.mouseDown && !playerInputState.clickRegistered) {
        playerMouse.pos.x = playerInputState.x - textureContainer.x;
        playerMouse.pos.y = playerInputState.y - textureContainer.y;
        this.collisionSystem.update();
        this.collisionSystem.checkOne(playerMouse, (collision) => {
          this.selectedSpriteIndex = this.spriteIndexByCollisionBox.get(collision.b);
          menuSprite.texture = textures[this.selectedSpriteIndex];
          menuText.text = `index: ${String(this.selectedSpriteIndex)}\nsize: ${menuSprite.texture.width}x${menuSprite.texture.height}`;
        });
      }
      playerInputState.clickRegistered = true;
    });
  }

  drawMenu() {    
    const menuContainer = new PIXI.Container();

    const rect = new PIXI.Graphics();
    rect.beginFill(0xFFFFFF);
    // set the line style to have a width of 5 and set the color to red
    rect.lineStyle(2, 0xFF0000);
    rect.drawRect(0, 0, 300, 68);
    menuContainer.addChild(rect);

    const sprite = new PIXI.Sprite();
    sprite.x = 2;
    sprite.y = 2;    
    sprite.scale.x = 2;
    sprite.scale.y = 2;
    menuContainer.addChild(sprite);

    const menuText = new PIXI.Text('click a tile', {fontFamily : 'Arial', fontSize: 24, fill : 0x708238, align : 'left'});
    menuText.x = 72;
    menuText.y = 8;
    menuContainer.addChild(menuText);

    return {
      menuContainer,
      menuSprite: sprite,
      menuText,
    };
  }


}
