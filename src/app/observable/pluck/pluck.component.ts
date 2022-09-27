import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {

  data = [
    {
      name: 'Fonz',
      skill: 'Angular',
      job: {
        title: 'UI Developer',
        exp: '2 Years'
      }
    },
    {
      name: 'Budd',
      skill: 'Javascript',
      job: {
        title: 'Javascript Developer',
        exp: '7 Years'
      }
    },
    {
      name: 'Bunnie',
      skill: 'Java',
      job: {
        title: 'Java Developer',
        exp: '5 Years'
      }
    },
    {
      name: 'Noe',
      skill: 'MySQL',
      job: {
        title: 'DBA',
        exp: '4 Years'
      }
    }
  ];

  ary1 = [];
  ary2 = [];

  constructor() { }

  ngOnInit(): void {

    // ex - 01
    from(this.data)
      .pipe(
        // map(data => data.skill),
        pluck('name'),
        toArray()
      )
      .subscribe(res => {
        this.ary1 = res;
      });

    // ex - 02
    from(this.data)
      .pipe(
        // map(data => data.skill),
        pluck('job', 'title'),
        toArray()
      )
      .subscribe(res => {
        this.ary2 = res;
      });
  }

}
