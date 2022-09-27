import { AfterViewInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { fromEvent, Subscription, timer } from 'rxjs';
import { interval } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements AfterViewInit {

  @ViewChild('addBtn') addBtn: ElementRef;
  obsMsg;
  videosubscription: Subscription;

  constructor(
    private designUtilityService: DesignUtilityService
  ) { }

  ngAfterViewInit() {    
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
      let cnt = 1;
      // const broadCastVideo = interval(1000);
      const broadCastVideo = timer(5000, 1000);
      this.videosubscription = broadCastVideo.subscribe(res => {
        const val = 'Video ' + cnt++;
        this.designUtilityService.print(val, 'elContainer');
      });
    });
  }

  stop() {
    this.videosubscription.unsubscribe();
  }

}
