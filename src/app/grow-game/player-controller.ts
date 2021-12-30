
export class PlayerController {

  static updateCharacterData(characterData, playerInputState, tick) {
    let dashTick = false;
    if (playerInputState.dash) {
      const timeSinceDash = tick - characterData.latestDashTick;
      dashTick = timeSinceDash > 100;
      if (dashTick) {
        characterData.latestDashTick = tick;        
      }
    }
    if(playerInputState.down) {
      if (dashTick) {
        characterData.vy = 30;
      } else if(characterData.vy < 15) {
        characterData.vy += 2;
      }
    }
    if(playerInputState.up) {
      if (dashTick) {
        characterData.vy = -30;
      } else if(characterData.vy > -15) {
        characterData.vy -= 2;
      }
    }
    if(playerInputState.right) {
      if (dashTick) {
        characterData.vx = 30;
      } else if(characterData.vx < 15) {
        characterData.vx += 2;
      }
    }
    if(playerInputState.left) {
      if (dashTick) {
        characterData.vx = -30;
      } else if(characterData.vx > -15) {
        characterData.vx -= 2;
      }
    }
  }
  
}