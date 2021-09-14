import * as d3 from 'd3';
import {BehaviorSubject, combineLatest} from 'rxjs';

export class ChartZoom {

  public zoom$ = new BehaviorSubject({});
  public d3Zoom = d3.zoom();

  constructor(root, public width$, public height$) {
    this.initZoom(root);
    combineLatest(
      width$,
      height$,
    ).subscribe(([width, height]) =>  {
      const extent = [
        [0, 0],
        [width, height],
      ];
      this.d3Zoom.translateExtent(extent).extent(extent);
    });
  }

  initZoom(root) {
    root.call(
      this.d3Zoom
        .scaleExtent([1, 8])
        .on('zoom', () => this.zoom$.next(d3.event)),
    );
  }

}