import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ImageStreamSetUpComponent } from '@pp/image-streams/image-stream-view/image-stream-set-up/image-stream-set-up.component';
import { ImageStreamSetUpRoutingModule } from '@pp/image-streams/image-stream-view/image-stream-set-up/image-stream-set-up.routes';
import {PpTestAppModule} from '@app/pp-test-app/pp-test-app.module'

@NgModule({
  imports: [
    CommonModule,
    PpTestAppModule,
    ImageStreamSetUpRoutingModule,
  ],
  declarations: [
    ImageStreamSetUpComponent,
  ],
  exports: [
    ImageStreamSetUpComponent,
  ],
})
export class ImageStreamSetUpModule { }
