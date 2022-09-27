import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {

  user1List = [];
  user2List = [];
  user3List = [];

  subMode2 = false;
  subMode3 = false;

  // Subscriptions
  subscription2: Subscription;
  subscription3: Subscription;

  // toggle
  methodInterval = false;
  intSubscription: Subscription;

  constructor(
    private designUtilityService: DesignUtilityService
  ) { }

  ngOnInit(): void {
    this.designUtilityService.videoEmit.subscribe(res => {
      this.user1List.push(res);
    });
  }

  onVideoAdd(video) {
    this.designUtilityService.videoEmit.next(video);
  }

  user2Subscribe() {
    if (!this.subMode2) {
      this.subscription2 = this.designUtilityService.videoEmit.subscribe(res => {
        this.user2List.push(res);
      });
    } else {
      this.subscription2.unsubscribe();
    }
    this.subMode2 = !this.subMode2;
  }

  user3Subscribe() {
    if (!this.subMode3) {
      this.subscription3 = this.designUtilityService.videoEmit.subscribe(res => {
        this.user3List.push(res);
      });
    } else {
      this.subscription3.unsubscribe();
    }
    this.subMode3 = !this.subMode3;
  }

  toggleMethod() {
    const broadCastVideo = interval(1000);

    if (!this.methodInterval) {
      this.intSubscription = broadCastVideo.subscribe(res => {
        this.designUtilityService.videoEmit.next('Video ' + res);
      });
    } else {
      this.intSubscription.unsubscribe();
    }
    this.methodInterval = !this.methodInterval;
  }

}
