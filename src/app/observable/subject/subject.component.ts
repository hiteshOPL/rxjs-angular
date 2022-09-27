import { Component, OnDestroy, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit, OnDestroy {

  username;

  constructor(
    private designUtilityService: DesignUtilityService,
  ) {
    designUtilityService.username.subscribe(res => {
      console.log(res);
      this.username = res;
    })
   }

  ngOnInit(): void {
    this.designUtilityService.exclusive.next(true);
  }

  ngOnDestroy(): void {
    this.designUtilityService.exclusive.next(false);
  }

}
