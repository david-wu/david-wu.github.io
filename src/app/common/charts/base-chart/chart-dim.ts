import ResizeSensor from 'css-element-queries/src/ResizeSensor';
import {Subject, BehaviorSubject, combineLatest} from 'rxjs';
import {map} from 'rxjs/operators';

export class ChartDim {

  public rootDim$ = new Subject();
  public chartDim$;
  public sensor;

  constructor(public rootEl, public margins) {
    this.sensor = new ResizeSensor(rootEl, () => {
      this.rootDim$.next({
        width: rootEl.clientWidth,
        height: rootEl.clientHeight,
      });
    });

    this.chartDim$ = this.rootDim$.pipe(
      map(({width, height}) => {
        return {
          width: width - this.margins.left - this.margins.right,
          height: height - this.margins.top - this.margins.bottom,
        };
      }),
    );
  }

  destroy() {
    this.sensor.detach();
  }

}