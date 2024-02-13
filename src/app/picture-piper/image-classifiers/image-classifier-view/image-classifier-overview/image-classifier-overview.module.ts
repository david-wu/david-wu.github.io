import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ImageGridModule } from '@common/image-grid/image-grid.module';
import { InputStringEditorModule } from '@common/input-string-editor/input-string-editor.module';
import { ImageClassifierOverviewComponent } from '@pp/image-classifiers/image-classifier-view/image-classifier-overview/image-classifier-overview.component';
import { ImageClassifierOverviewRoutingModule } from '@pp/image-classifiers/image-classifier-view/image-classifier-overview/image-classifier-overview.routes';

@NgModule({
  imports: [
    CommonModule,
    ImageGridModule,
    ImageClassifierOverviewRoutingModule,
    InputStringEditorModule,
  ],
  declarations: [
    ImageClassifierOverviewComponent,
  ],
  exports: [
    ImageClassifierOverviewComponent,
  ],
})
export class ImageClassifierOverviewModule { }
