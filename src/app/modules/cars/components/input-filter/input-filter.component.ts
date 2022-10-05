import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, Subscription } from 'rxjs';
import { AppState } from 'src/app/app.store';
import { setTextFilterAction } from '../../store/cars.actions';

@Component({
  selector: 'input-filter',
  templateUrl: './input-filter.component.html',
  styleUrls: ['./input-filter.component.scss']
})
export class InputFilterComponent implements OnInit, OnDestroy {

  inputControl: FormControl = new FormControl();
  inputSubscription: Subscription | undefined;

  constructor(
    private readonly store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.inputSubscription = this.inputControl.valueChanges.pipe(
      debounceTime(300)
    ).subscribe(value => {
        this.store.dispatch(setTextFilterAction({ textFilter: value }));
      });
  }

  ngOnDestroy(): void {
    this.inputSubscription?.unsubscribe();
  }

}
