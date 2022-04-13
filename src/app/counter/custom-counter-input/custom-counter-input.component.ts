import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { changeChannelName, customInput } from '../state/counter.actions';
import { getChannelName } from '../state/counter.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {
  value!: number;
  channelName$!: Observable<string>;

  changedName!: string;
  constructor(private store: Store<{ counter: CounterState }>) { }

  ngOnInit(): void {
    this.channelName$ = this.store.select(getChannelName)
  }

  addCustomInput(){
    this.store.dispatch(customInput({ value: +this.value }))
 }

 onChangeChannelName(){
  this.store.dispatch(changeChannelName({ channelName: this.changedName }))
 }

}
