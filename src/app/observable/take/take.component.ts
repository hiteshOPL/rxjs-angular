import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, take, takeLast, takeUntil, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  randomNames = ['Caspar', 'Willi', 'Wenonah', 'Silvanus', 'Malinda', 'Eadie', 'Alister', 'Kay'];

  constructor(
    private designUtilityService: DesignUtilityService,
  ) { }

  ngOnInit(): void {

    let nameSource = from(this.randomNames);


    // EX - 01
    nameSource.pipe(
      take(5)
    )
      .subscribe(res => {
        this.designUtilityService.print(res, 'elContainer');
      });

    // EX - 02
    nameSource.pipe(
      takeLast(5)
    )
      .subscribe(res => {
        this.designUtilityService.print(res, 'elContainer2');
      });

    // EX - 03


    const source = interval(1000);

    let condition1 = timer(4000);
    let condition2 = fromEvent(document, 'click');
    source.pipe(
      map(res => 'Number ' + res),
      takeUntil(condition2)
    )
      .subscribe(res => {
        this.designUtilityService.print(res, 'elContainer3');
      });
  }

}
