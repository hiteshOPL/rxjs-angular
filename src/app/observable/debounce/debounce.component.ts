import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { LoadingBarState } from '@ngx-loading-bar/core/loading-bar.state';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.scss']
})
export class DebounceComponent implements AfterViewInit {

  @ViewChild('myInput') myInput: ElementRef;
  @ViewChild('myInput2') myInput2: ElementRef;
  reqData;
  reqData2;
  loader: LoadingBarState;

  constructor(
    private loadingBarService: LoadingBarService,
  ) {
    this.loader = this.loadingBarService.useRef('core');
   }

  ngAfterViewInit() {

    // Ex-01 DebounceTime
    const searchTerm = fromEvent(this.myInput.nativeElement, 'keyup').pipe(
      map((event: any) => event.target.value),
      debounceTime(500)
    );

    searchTerm.subscribe(res => {
      console.log('res: ', res);
      this.reqData = res;
      this.loader.start();

      setTimeout(() => {
        this.reqData2 = null;
        this.loader.complete();
      }, 1000);
    });

    // Ex-02 DitinctUntilChnged
    const searchTerm2 = fromEvent(this.myInput2.nativeElement, 'keyup').pipe(
      map((event: any) => event.target.value),
      debounceTime(500),
      distinctUntilChanged()
    );

    searchTerm2.subscribe(res => {
      console.log('res: ', res);
      this.reqData2 = res;
      this.loadingBarService.start();

      setTimeout(() => {
        this.reqData2 = null;
        this.loadingBarService.stop();
      }, 1000);
    });
  }

}
