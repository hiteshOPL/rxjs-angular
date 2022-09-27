import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements AfterViewInit {

  @ViewChild('addBtn') addBtn: ElementRef;

  constructor(
    private designUtilityService: DesignUtilityService,
  ) { }

  ngAfterViewInit() {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
      let countVal = 'Video ' + count++;
      this.designUtilityService.print(countVal, 'elContainer');
      this.designUtilityService.print(countVal, 'elContainer2');
    });
  }

}
