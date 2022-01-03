import {BehaviorSubject} from 'rxjs';

export interface PlayerInputState {
  up?: boolean;
  down?: boolean;
  right?: boolean;
  left?: boolean;
  dash?: boolean;
  mouseDown?: boolean;
  clickRegistered?: boolean;
  x?: number;
  y?: number;
  wheelYValue?: number;
}

export interface MenuState {
  containerX: number,
  containerY: number,
  width: number,
  height: number,
  actionsById: any,
  availableActionIds: any[],  
}

export class GameState {
  menu$ = new BehaviorSubject<MenuState>({
    containerX: 0,
    containerY: 640 - 64,
    width: 960,
    height: 64,
    actionsById: {
      shovel: {
        textureId: 2874,
      },
      pickaxe: {
        textureId: 2875,
      },
      hammer: {
        textureId: 2876,
      },
    },
    availableActionIds: [
      'pickaxe',
      'hammer',
    ],
  });
  playerInput: PlayerInputState = {
    x: 0,
    y: 0,
    wheelYValue: 0,
  };

  public dispatch(action) {
    console.log('action', action);
  }
}
