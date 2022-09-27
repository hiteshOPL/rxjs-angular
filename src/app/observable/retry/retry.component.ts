import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent {
  stateAry = [];
  fetching = false;
  status = 'No data';

  constructor(
    private http: HttpClient,
  ) { }

  fetchDetails() {
    this.stateAry = [];
    let retryCount = 0;
    this.fetching = true;
    this.status = 'Fetching data....';
    // this.http.get('https://angular.io/generated/announcements.json').subscribe(res => {
    // this.http.get('https://api.github.com/users/hadley/orgs').subscribe(res => {
    this.http.get('https://cdn-api.co-vin.in/api/v2/admin/location/states')
      .pipe(
        // retry(5)
        retryWhen(err => err.pipe(
          delay(3000),
          scan((retry) => {
            console.log(retry);
            if (retryCount >= 5) {
              throw err;
            } else {
              retryCount = retryCount + 1;
              console.log('retryCount: ', retryCount);
              this.status = 'Retrying Attemp #' + retryCount;
              return retryCount;
            }
          })
        ))
      )
      .subscribe(
        (res: any) => {
          console.log(res);
          this.stateAry = res.states;
          this.status = 'Data fetched';
          this.fetching = false;
        },
        (err) => {
          console.log('err: ', err);
          this.fetching = false;
          this.status = 'Problem fetching data';
        }
      )
  }

}
