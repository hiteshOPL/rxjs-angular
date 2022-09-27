import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  data = [
    { name: 'Moss', gender: 'Male' },
    { name: 'Stephenie', gender: 'Female' },
    { name: 'Eolande', gender: 'Female' },
    { name: 'Harmony', gender: 'Female' },
    { name: 'Keely', gender: 'Female' }
  ];

  sourceSub: Subscription;
  constructor() { }

  ngOnInit(): void {

    // ex - 01

    const source = interval(1000);

    this.sourceSub = source.pipe(
      take(5),
      toArray()
    )
      .subscribe(res => {
        console.log('sourceSub: ', res);
      });


    // ex - 02

    const fromObs = from(this.data);
    fromObs
      .pipe(toArray())
      .subscribe(res => {
        console.log('fromObs: ', res);
      });


    // ex - 03
    const ofSource = of('Dwayne', 'Garnette', 'Kelsy', 'Marcile', 'Lethia');
    ofSource
      .pipe(toArray())
      .subscribe(res => {
        console.log('res: ', res);
      })

  }
}
