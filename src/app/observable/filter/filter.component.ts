import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';
import { filterData } from '../data';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  ary1 = [];
  ary2 = [];
  ary3 = [];

  data = filterData;

  constructor() { }

  ngOnInit(): void {

    const source = from(this.data);


    // ex-01 filter by length

    source
      .pipe(
        filter(member => member.first_name.length > 6),
        toArray()
      )
      .subscribe(res => {
        this.ary1 = res;
      });


    // ex-02 filter by length

    source
      .pipe(
        filter(member => member.gender === 'Male'),
        toArray()
      )
      .subscribe(res => {
        this.ary2 = res;
      });


      // ex-03 filter by nth item
  
      source
        .pipe(
          filter(member => member.id <= 6),
          toArray()
        )
        .subscribe(res => {
          this.ary3 = res;
        });
  }

}
