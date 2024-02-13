import {
  Component,
} from '@angular/core';
import {
  select,
  Store,
} from '@ngrx/store';
import {
  getSelectedImageClassifier$,
  ImageClassifiersActions,
} from '@pp/image-classifiers/store/index';
import {PicturePiperService} from '@pp/services/index';
import { of, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'dwu-image-classifier-overview',
  templateUrl: './image-classifier-overview.component.html',
  styleUrls: ['./image-classifier-overview.component.scss']
})
export class ImageClassifierOverviewComponent {

  public selectedImageClassifier$: Observable<any>;
  public classifierImages$;

  constructor(
    public store: Store,
    public ppService: PicturePiperService,
  ) {
    this.selectedImageClassifier$ = this.store.pipe(select(getSelectedImageClassifier$));
    this.classifierImages$ = this.selectedImageClassifier$.pipe(
      switchMap((imageClassifier) => {
        console.log('imageClassifier', imageClassifier);
        if(!imageClassifier) return of([]);
        return this.ppService.getImagesForClassifier$(imageClassifier.id);
      }));

    this.classifierImages$.subscribe(console.log);
  }

  public onLabelChange(imageClassifierId: string, label: string) {
    this.store.dispatch(ImageClassifiersActions.updateImageClassifier({ imageClassifierId, patch: { label } }));
  }

  public onDescriptionChange(imageClassifierId: string, description: string) {
    this.store.dispatch(ImageClassifiersActions.updateImageClassifier({ imageClassifierId, patch: { description } }));
  }

}
