import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Subject } from "rxjs";
import { takeUntil, tap } from "rxjs/operators";

@Component({
  selector: "app-form-input-validator",
  templateUrl: "./form-input-validator.component.html",
  styleUrls: ["./form-input-validator.component.scss"]
})
export class FormInputValidatorComponent implements OnInit, OnDestroy {
  control = new FormControl(5, { updateOn: "blur" });
  private _destroy$ = new Subject<void>();
  history: number[] = [];

  constructor() {}

  ngOnInit() {
    this.control.valueChanges
      .pipe(
        takeUntil(this._destroy$),
        tap(value => this.history.unshift(value)),
        tap(value => {
          if (value < 5) {
            this.control.setValue(5);
          }
          if (value > 25) {
            this.control.setValue(25);
          }
          if (value % 5 !== 0) {
            this.control.setValue(value - (value % 5));
          }
        })
      )
      .subscribe();
  }

  resetHistory() {
    this.history = [];
  }

  ngOnDestroy() {
    this._destroy$.next();
  }
}
