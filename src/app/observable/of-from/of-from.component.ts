import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {
  obsMsg;

  constructor(
    private designUtilityService: DesignUtilityService,
  ) { }

  ngOnInit(): void {

    // Of
    const obs1 = of('Anup', 'Shekhar', 'Sharma');

    obs1.subscribe(res => {
      this.designUtilityService.print(res, 'elContainer');
    });

    const obs2 = of({ a: 'Anup', b: 'Shekhar', c: 'Sharma' });

    obs2.subscribe(res => {
      this.obsMsg = res;
    });


    // from - Array
    const obs3 = from(['Lance', 'Pearce', 'Sianna']);

    obs3.subscribe(res => {
      this.designUtilityService.print(res, 'elContainer3');
    });

    // from - Promise
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('Promise Resolved');
      }, 3000);
    });

    const obs4 = from(promise);

    obs4.subscribe(res => {
      this.designUtilityService.print(res, 'elContainer4');
    });

    // from - String

    const obs5 = from('RxJS Testing');

    obs5.subscribe(res => {
      this.designUtilityService.print(res, 'elContainer5');
    });
  }

}
