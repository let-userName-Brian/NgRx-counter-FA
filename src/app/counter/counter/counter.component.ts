import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { getCounter } from '../state/counter.selectors';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter: number = 0
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(getCounter).subscribe(data => {
      this.counter = data
    });
  };
}
