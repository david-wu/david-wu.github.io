import {SpriteState} from './sprite-state';
import * as PIXI from 'pixi.js'

import {System} from 'detect-collisions';


// lets sprites be sprites that can be interacted with
export class SpriteStateController {
  spriteStateById = {};
  spritesById = {};
  collisionSystem = new System();
  colliderById = {};
  spriteIdByCollider = new Map();

  constructor(
    public spriteContainer,
    public availableSprites,
  ) {
  }

  addSprites(spriteInits: any[]) {
    for(let i = 0; i < spriteInits.length; i++) {
      const spriteInit = spriteInits[i];
      this.addSprite(spriteInit[0], spriteInit[1]);
    }
  }

  updateSprite(id: string) {

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

    const collisionRadius = (spriteState.collisionRadius || Math.min(sprite.width, sprite.height) / 2);
    const circle = this.collisionSystem.createCircle(
      { x: sprite.x + (sprite.width / 2), y: sprite.y + (sprite.height / 2) },
      collisionRadius,
    );
    this.colliderById[spriteState.id] = circle;
    this.spriteIdByCollider.set(circle, spriteState.id);

    return spriteState;
  }

  removeSprite(spriteId) {
    const sprite = this.spritesById[spriteId];
    delete this.spritesById[spriteId];
    delete this.spriteStateById[spriteId];
    this.spriteContainer.removeChild(sprite);

    const collider = this.colliderById[spriteId];
    delete this.colliderById[spriteId];
    this.spriteIdByCollider.delete(collider);
    this.collisionSystem.remove(collider);
  }


}
