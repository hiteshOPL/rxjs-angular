import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, map } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements AfterViewInit {

  @ViewChild('uname') uname: ElementRef;
  username;

  constructor(
    private designUtilityService: DesignUtilityService,
  ) {
    designUtilityService.username.subscribe(res => {
      this.username = res;
    })
  }

  ngAfterViewInit(): void {
    fromEvent(this.uname.nativeElement, 'keyup').pipe(
      map((event: any) => event.target.value)
    ).subscribe(res => {
      this.username = res;
    })
  }

  change() {
    this.designUtilityService.username.next(this.username);
  }

}
