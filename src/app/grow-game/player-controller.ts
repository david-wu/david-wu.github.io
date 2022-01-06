
export class PlayerController {

  // maxSpeed = 50, acceleration = 2, dashSpeed = 30
  static updateSpriteState(spriteState, playerInputState, tick, maxSpeed = 200, acceleration = 5, dashSpeed = 300) {
    let isDashTick = false;
    if (playerInputState.dash) {
      const timeSinceDash = tick - spriteState.latestDashTick;
      isDashTick = timeSinceDash > 50;
      if (isDashTick) {
        spriteState.latestDashTick = tick;        
      }
    }
    if(playerInputState.down) {      
      if(spriteState.vy < maxSpeed) {
        spriteState.vy = Math.min(spriteState.vy + acceleration, maxSpeed);
      }
      if (isDashTick) {
        spriteState.vy = 300;
      }
    }
    if(playerInputState.up) {
      if(spriteState.vy > -maxSpeed) {
        spriteState.vy = Math.max(spriteState.vy - acceleration, -maxSpeed);
      }
      if (isDashTick) {
        spriteState.vy = -300;
      }
    }
    if(playerInputState.right) {
      if(spriteState.vx < maxSpeed) {
        spriteState.vx = Math.min(spriteState.vx + acceleration, maxSpeed);
      }
      if (isDashTick) {
        spriteState.vx = 300;
      }
    }
    if(playerInputState.left) {
      if(spriteState.vx > -maxSpeed) {
        spriteState.vx = Math.max(spriteState.vx - acceleration, -maxSpeed);
      }
      if (isDashTick) {
        spriteState.vx = -300;
      }
    }
    if(playerInputState.mouseDown){
      if((tick - spriteState.lastClickTick) > spriteState.actionCooldown) {
        spriteState.isClickTick = true;
        spriteState.lastClickTick = tick;
      }
    }
  }
  
}