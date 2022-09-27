import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit, OnDestroy {
  techStatus;
  techStatus2;
  cusObj2Subs: Subscription;
  cusObj3Subs: Subscription;
  currentName;

  constructor(
    private designUtilityService: DesignUtilityService
  ) { }

  ngOnInit(): void {

    // Ex-01 (Manual)

    const cusObj1 = new Observable(observer => {
      setTimeout(() => {
        observer.next('Java');
      }, 1000);
      setTimeout(() => {
        observer.next('Angular');
      }, 2000);
      setTimeout(() => {
        observer.next('React');
      }, 3000);
      setTimeout(() => {
        observer.next('JQuery');


        // comment if need to complete
        // observer.error('Limit Exceed.');
      }, 4000);
      setTimeout(() => {
        observer.next('MySQL');
        observer.complete();
      }, 5000);

    });

    cusObj1.subscribe(
      (res) => {
        this.designUtilityService.print(res, 'elContainer');
      },
      (err) => {
        this.techStatus = 'error';
      },
      () => {
        this.techStatus = 'completed';
      });


    // EX-02 Custom Interval

    const arr = ['MySQL', 'JQuery', 'React', 'Angular', 'Java'];
    let count = 0;
    const cusObj2 = new Observable(observer => {
      setInterval(() => {
        observer.next(arr[count]);

        if (count >= 3) {
          // observer.error();
        }
        if (count >= 4) {
          observer.complete();
        }

        count++;
      }, 1000);
    });

    this.cusObj2Subs = cusObj2.subscribe(res => {
      this.designUtilityService.print(res, 'elContainer2')
    },
      (err) => {
        this.techStatus2 = 'error';
      },
      () => {
        this.techStatus2 = 'completed';
      });


    // Ex-03 Random name
    const nameAry = ['Roy', 'Will', 'Rosanna', 'Eduardo', 'Dav', 'Florry', 'Allayne'];
    let count1 = 0;
    const cusObj3 = new Observable(observer => {
      setInterval(() => {
        observer.next(nameAry[count1]);

        if (count1 >= 3) {
          observer.error();
        }
        if (count1 >= 5) {
          observer.complete();
        }

        count1++;
      }, 1000);

      this.cusObj3Subs = cusObj3.subscribe(res => {
        console.log('res: ', res);
        // this.designUtilityService.print(res, 'elContainer2')
        this.currentName = res;
      },
        (err) => {
          this.techStatus2 = 'error';
        },
        () => {
          this.techStatus2 = 'completed';
        });
    });
  }

  ngOnDestroy(): void {
    this.cusObj2Subs.unsubscribe();
    this.cusObj3Subs.unsubscribe();
  }


}
