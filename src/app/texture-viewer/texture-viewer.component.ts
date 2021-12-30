import {ElementRef} from '@angular/core'
import * as PIXI from 'pixi.js'
import {keyBy, mapValues, each, uniqueId} from 'lodash';
import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import {ResourceLoader} from '@src/app/grow-game/resource-loader';
import {InputStateBinder} from '@src/app/grow-game/input-state-binder';

@Component({
  selector: 'dwu-texture-viewer',
  template: '',
  templateUrl: './texture-viewer.component.html',
  styleUrls: ['./texture-viewer.component.scss']
})
export class TextureViewerComponent {
  // @ViewChild('textureViewerEl', {static: true}) textureViewerEl;

  constructor(public hostEl: ElementRef) {

  }

  ngAfterViewInit() {
    this.mountGame(this.hostEl.nativeElement);
  }

  async mountGame(element) {
    const app = new PIXI.Application({
      width: 960,
      height: 640,
    });
    element.appendChild(app.view);
    const playerInputState = InputStateBinder.bindElement(element);
    const stageState = {
      x: 0,
      y: 0,
      width: 960,
      height: 640,
    };
    const textures = await ResourceLoader.loadTextures();

    const textureContainer = new PIXI.Container();
    for(let i = 0; i < textures.length; i++) {
      const sprite = new PIXI.Sprite(textures[i]);
      const column = i % 60;
      const row = Math.floor(i / 60);
      sprite.x = column * 32;
      sprite.y = row * 32;
      sprite.anchor.x = 0;
      sprite.anchor.y = 0;
      textureContainer.addChild(sprite);
    }

    app.stage.addChild(textureContainer);

    app.ticker.add(() => {
      const wheelYValue = playerInputState.wheelYValue;
      stageState.y += wheelYValue;
      app.stage.x = stageState.x;
      app.stage.y = stageState.y;
      playerInputState.wheelYValue = 0;
    });
  }


}

