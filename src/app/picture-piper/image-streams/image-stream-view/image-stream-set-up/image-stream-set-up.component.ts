import {
  Component,
} from '@angular/core';
import {
  select,
  Store,
} from '@ngrx/store';
import {
  getSelectedImageStream$,
  ImageStreamsActions,
} from '@pp/image-streams/store/index';
import { Observable } from 'rxjs';
import { getUser$ } from '@app/store';

@Component({
  selector: 'dwu-image-stream-set-up',
  templateUrl: './image-stream-set-up.component.html',
  styleUrls: ['./image-stream-set-up.component.scss']
})
export class ImageStreamSetUpComponent {

  public selectedImageStream$: Observable<any>;
  public user$: Observable<User>;

  constructor(
    public store: Store,
  ) {
    this.selectedImageStream$ = this.store.pipe(select(getSelectedImageStream$));
    this.user$ = this.store.pipe(select(getUser$));
  }

}
