import {
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import {
  select,
  Store,
} from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  ExifService,
  FirebaseFirestoreService,
  FirebaseStorageService,
  CamAppService,
  ImageProcessingService,
} from '@services/index';


import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';
import * as poseDetection from '@tensorflow-models/pose-detection';

@Component({
  selector: 'dwu-pp-test-app',
  templateUrl: './pp-test-app.component.html',
  styleUrls: ['./pp-test-app.component.scss']
})
export class PpTestAppComponent {
  @Input() user;
  @Input() streamId = '';
  @Input() classifierId = 'on3KXitewjIBjBCdtfqq';

  public selectedImageSource$: Observable<any>;
  @ViewChild('webCamEl', { static: true }) webCamEl;

  public results: any[] = [];
  public webCamStopper;

  constructor(
    public cas: CamAppService,
    public store: Store,
  ) {
  }

  public ngOnInit() {
    console.log('this.cas', this.cas);
  }

  public ngOnDestroy() {
    this.onDisableCamera();
  }

  public captureImageBlob(videoEl) {
    const canvas = document.createElement('canvas');

    canvas.width = 1920;
    canvas.height = 1080;

    const ctx = canvas.getContext('2d');
    ctx.drawImage( videoEl, 0, 0, canvas.width, canvas.height );
    return new Promise((res, rej) => {
      canvas.toBlob(res);
    });
  }

  public async onEnableCamera() {
    if (navigator.mediaDevices.getUserMedia) {
      this.webCamStopper = await this.runClassifierOnWebCam();
    }
  }

  public onDisableCamera() {
    this.webCamStopper && this.webCamStopper();
    this.results = [];
  }

  public async runClassifierOnWebCam() {
    await tf.ready();
    const webcam = await tf.data.webcam(this.webCamEl.nativeElement, {
      resizeWidth: 320,
      resizeHeight: 160,
    });
    const model = poseDetection.SupportedModels.MoveNet;
    const detector = await poseDetection.createDetector(model);
    const poseInterval = setInterval(async () => {
      const image = await webcam.capture();
      const poses = await detector.estimatePoses(image);
      if (poses.length && this.user && this.streamId && this.classifierId) {
        const file = await this.captureImageBlob(this.webCamEl.nativeElement);
        console.log('uploading file', file);
        this.cas.uploadFile(file, this.user, this.streamId, this.classifierId);
      }
      this.results = poses;
    }, 3000);

    return () => {
      this.stopVideo(this.webCamEl.nativeElement);
      webcam.stop();
      clearInterval(poseInterval);
    };
  }

  public stopVideo(video) {
    const stream = video.srcObject;
    const tracks = (stream && stream.getTracks()) || [];
    console.log('tracks', tracks);
    tracks.forEach((track) => track.stop());
    video.srcObject = null;
  }

}
