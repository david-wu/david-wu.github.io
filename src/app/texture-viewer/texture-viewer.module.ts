import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {GrowGameModule} from '@src/app/grow-game/grow-game.module';

import { TextureViewerComponent } from '@app/texture-viewer/texture-viewer.component';

@NgModule({
  declarations: [
    TextureViewerComponent,
  ],
  imports: [
    GrowGameModule,
    CommonModule,
  ],
  exports: [
    TextureViewerComponent,
  ],
  providers: [
  ],
})
export class TextureViewerModule { }
