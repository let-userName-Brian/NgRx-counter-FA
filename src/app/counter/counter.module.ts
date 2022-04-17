import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';

import { CounterComponent } from "./counter/counter.component";
import { CounterButtonsComponent } from "./counter-buttons/counter-buttons.component";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CustomCounterInputComponent } from "./custom-counter-input/custom-counter-input.component";
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "./state/counter.reducer";
import { COUTNER_STATE_NAME } from "./state/counter.selectors";

const counterRoutes: Routes = [
  { path: '', component: CounterComponent }
];

@NgModule({
  declarations: [
    CounterComponent,
    CounterButtonsComponent,
    CounterOutputComponent,
    CustomCounterInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(counterRoutes),
    StoreModule.forFeature(COUTNER_STATE_NAME, counterReducer)
  ],
})
export class CounterModule {

}