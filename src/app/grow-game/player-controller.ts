
export class PlayerController {

  static updateSpriteState(spriteState, playerInputState, tick, maxSpeed = 15, acceleration = 2) {
    let dashTick = false;
    if (playerInputState.dash) {
      const timeSinceDash = tick - spriteState.latestDashTick;
      dashTick = timeSinceDash > 100;
      if (spriteState.isDashTick) {
        spriteState.latestDashTick = tick;        
      }
    }
    if(playerInputState.down) {      
      if(spriteState.vy < maxSpeed) {
        spriteState.vy = Math.min(spriteState.vy + acceleration, maxSpeed);
      }
      if (dashTick) {
        spriteState.vy = 30;
      }
    }
    if(playerInputState.up) {
      if(spriteState.vy > -maxSpeed) {
        spriteState.vy = Math.max(spriteState.vy - acceleration, -maxSpeed);
      }
      if (dashTick) {
        spriteState.vy = -30;
      }
    }
    if(playerInputState.right) {
      if(spriteState.vx < maxSpeed) {
        spriteState.vx = Math.min(spriteState.vx + acceleration, maxSpeed);
      }
      if (dashTick) {
        spriteState.vx = 30;
      }
    }
    if(playerInputState.left) {
      if(spriteState.vx > -maxSpeed) {
        spriteState.vx = Math.max(spriteState.vx - acceleration, -maxSpeed);
      }
      if (dashTick) {
        spriteState.vx = -30;
      }
    }
    if(playerInputState.mouseDown){
      if((tick - spriteState.lastActionTick) > 10) {
        spriteState.isActionTick = true;
        spriteState.lastActionTick = tick;
      }
    }
  }
  
}