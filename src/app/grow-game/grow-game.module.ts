import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GrowGameComponent } from '@app/grow-game/grow-game.component';

@NgModule({
  declarations: [
    GrowGameComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    GrowGameComponent,
  ],
  providers: [
  ],
})
export class GrowGameModule { }
