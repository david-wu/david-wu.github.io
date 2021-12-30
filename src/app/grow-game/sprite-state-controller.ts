import {SpriteState} from './sprite-state';
import * as PIXI from 'pixi.js'

export class SpriteStateController {
  spriteStateById = {};
  spritesById = {};
  playerControlledSpriteState;

  constructor(
    public spriteContainer,
    public availableSprites,
  ) {}

  addSprites(spriteInits: [string, any][]) {
    for(let i = 0; i < spriteInits.length; i++) {
      const spriteInit = spriteInits[i];
      this.addSprite(spriteInit[0], spriteInit[1]);
    }
  }

  addSprite(type, overrides) {
    const spriteState = SpriteState.createSpriteState(type, overrides);
    const sprite = new PIXI.Sprite(this.availableSprites[spriteState.spriteNumber]);
    sprite.anchor.x = spriteState.anchorX || 0;
    sprite.anchor.y = spriteState.anchorY || 0;
    sprite.scale.x = spriteState.scaleX || 1;
    sprite.scale.y = spriteState.scaleY || 1;

    this.spriteStateById[spriteState.id] = spriteState;
    this.spriteContainer.addChild(sprite);
    this.spritesById[spriteState.id] = sprite;

    if (spriteState.playerControlled) {
      this.playerControlledSpriteState = spriteState;
    }
  }


}
