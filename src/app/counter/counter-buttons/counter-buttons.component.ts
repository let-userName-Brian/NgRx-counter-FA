import { Component, OnInit } from '@angular/core';
import { decrement, increment, reset, customInput } from '../state/counter.actions';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss']
})
export class CounterButtonsComponent implements OnInit {
  value: number = 0
  constructor(private store: Store<{ counter: CounterState }>) { }

  ngOnInit(): void {
  }


  onIncrement() {
    this.store.dispatch(increment())
   };
 
   onDecrement() {
     this.store.dispatch(decrement())
   };
 
   onReset() {
     this.store.dispatch(reset())
   };

   addCustomInput(){
      this.store.dispatch(customInput({ value: +this.value }))
   }
}
