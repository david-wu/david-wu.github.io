import {PlayerInputState} from './game-state';

const defaultPlayerInputState = {
  x: 0,
  y: 0,
  wheelYValue: 0,
}

/**
 * Keeps playerInputState up to date with latest player inputs
 */
export class InputStateBinder {

  static bindElement(element, playerInputState: PlayerInputState = {...defaultPlayerInputState}) {
    element.setAttribute('tabindex', 0);
    element.addEventListener('keydown', (e) => {
      e.stopPropagation();
      e.preventDefault();
      playerInputState[keyCodeNames[e.keyCode]] = true;
    });
    element.addEventListener('keyup', (e) => {
      e.stopPropagation();
      e.preventDefault();
      playerInputState[keyCodeNames[e.keyCode]] = false;
    });
    element.addEventListener('mousemove', (e) => {
      playerInputState.x = e.offsetX;
      playerInputState.y = e.offsetY;
    });
    element.addEventListener('mousedown', (e) => {
      playerInputState.mouseDown = true;
      playerInputState.clickRegistered = false;
    });
    element.addEventListener('mouseup', (e) => {
      playerInputState.mouseDown = false;
    });
    element.addEventListener('mousewheel', (e) => {
      playerInputState.wheelYValue = playerInputState.wheelYValue || 0;
      playerInputState.wheelYValue -= e.deltaY;
    });
    return playerInputState;
  }

}

const keyCodeNames = {
  87: 'up',
  38: 'up',
  39: 'right',
  68: 'right',
  40: 'down',
  83: 'down',
  37: 'left',
  65: 'left',
  32: 'dash',
};
