import { Component, OnInit } from '@angular/core';
import { interval, map, Subscription, tap } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {
  color = 'white';
  constructor(
    private designUtilityService: DesignUtilityService
  ) { }

  ngOnInit(): void {

    const source = interval(1000);

    // EX - 01

    const ary = ['Lurlene', 'Bernadina', 'Park', 'Gavan', 'Celle', 'Gabi'];

    let sub1: Subscription;
    sub1 = source.pipe(
      tap(data => {
        if (data === 4) {
          sub1.unsubscribe();
        }
      }),
      map(data => ary[data])
    )
      .subscribe(res => {
        this.designUtilityService.print(res, 'elContainer');
      });

    // EX - 02

    const ary1 = ['Red', 'Yellow', 'Green', 'Pink', 'blanchedalmond', 'brown'];

    let sub2: Subscription;
    sub2 = source.pipe(
      tap(data => {
        if (data === 6) {
          sub2.unsubscribe();
        }
      }),
      map(data => ary1[data])
    )
      .subscribe(res => {
        this.color = res;
        this.designUtilityService.print(res, 'elContainer2');
      });
  }

}
