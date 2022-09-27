import { Component } from '@angular/core';
import { DesignUtilityService } from 'src/app/appService/design-utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  exclusive = false;

  constructor(
    private designUtilityService: DesignUtilityService,
  ) {
    this.designUtilityService.exclusive.subscribe(res => {
      console.log(res);
      this.exclusive = res;
    })
  }

}
