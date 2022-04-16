import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter: number = 0
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe(data => {
      this.counter = data.counter
    });
  };
}
