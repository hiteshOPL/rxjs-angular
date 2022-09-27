import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  msg1;
  sub1: Subscription;
  msg2;
  sub2: Subscription;

  constructor(
    private designUtilityService: DesignUtilityService
  ) { }

  ngOnInit(): void {

    // EX - 01
    const broadcastVideo = interval(1000);

    this.sub1 = broadcastVideo
      .pipe(map(data => 'Video ' + data))
      .subscribe(res => {
        this.msg1 = res;
      });

    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 10000);


    // EX - 02

    this.sub2 = broadcastVideo
      .pipe(map(data => 'Video ' + (data * 10)))
      .subscribe(res => {
        this.msg2 = res;
      });

    setTimeout(() => {
      this.sub2.unsubscribe();
    }, 10000);


    // ex -03
    const members = from([
      {
        id: 1, name: 'Arliene'
      },
      {
        id: 2, name: 'Wiley'
      },
      {
        id: 3, name: 'Garek'
      },
      {
        id: 4, name: 'Greggory'
      },
      {
        id: 5, name: 'Toiboid'
      },
      {
        id: 6, name: 'Hinze'
      },
      {
        id: 7, name: 'Lorne'
      },
    ]);

    members
      .pipe(map(data => data.name))
      .subscribe(res => {
        this.designUtilityService.print(res, 'elContainer');
      })

  }

}
