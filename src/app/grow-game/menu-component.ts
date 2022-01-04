import {each} from 'lodash';
import * as PIXI from 'pixi.js'
import {Subject} from 'rxjs';
import {System} from 'detect-collisions';
import {MenuState} from './game-state';

export class MenuComponent {

  public menuState: MenuState;
  public menuContainer = new PIXI.Container();
  public activeSpritesByActionId = {};
  public actions$ = new Subject();
  private menuRect: PIXI.Graphics;

  // private collisionSystem = new System();
  // private collisionBoxByActionId = new Map();
  
  constructor(
    private textureList,
    private gameState,
  ) {
    this.menuRect = new PIXI.Graphics();
    this.menuRect.beginFill(0xFFFFFF);
    this.menuRect.lineStyle(1, 0xFF0000);
    this.menuContainer.addChild(this.menuRect);

    this.gameState.menu$.subscribe((menuState) => this.setMenuState(menuState));
  }

  setMenuState(menuState) {
    this.menuState = menuState;
    this.removeOldActionSprites(menuState.availableActionIds);

    const sprites = menuState.availableActionIds.map((actionId: string, index: number) => {
      let sprite = this.activeSpritesByActionId[actionId];
      if(!sprite) {
        sprite =  new PIXI.Sprite();
        sprite.y = 2;
        sprite.scale.x = 2;
        sprite.scale.y = 2;
        this.menuContainer.addChild(sprite);
        this.activeSpritesByActionId[actionId] = sprite;
      }
      sprite.x = 2 + (index * 34);

      const action = menuState.actionsById[actionId];
      sprite.texture = this.textureList[action.textureId];
      return sprite;
    });

    this.menuContainer.x = menuState.containerX;
    this.menuContainer.y = menuState.containerY;
    this.menuRect.drawRect(1, 1, menuState.width-1, menuState.height-2);
  };

  removeOldActionSprites(availableActionIds: string[]) {
    const availableActionIdSet = new Set(availableActionIds);
    each(this.activeSpritesByActionId, (sprite, actionId: string) => {
      if(!availableActionIdSet.has(actionId)) {
        this.menuContainer.removeChild(sprite);
        delete this.activeSpritesByActionId[actionId];
      }
    });    
  }

}