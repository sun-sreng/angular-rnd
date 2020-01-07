import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Subject } from "rxjs";
import { takeUntil, startWith, tap } from "rxjs/operators";

@Component({
  selector: "app-form-input",
  templateUrl: "./form-input.component.html",
  styleUrls: ["./form-input.component.scss"]
})
export class FormInputComponent implements OnInit, OnDestroy {
  control = new FormControl("Zac");
  private _destroyings$ = new Subject<void>();
  history: string[] = [];

  constructor() {}

  ngOnInit() {
    this.control.valueChanges
      .pipe(
        takeUntil(this._destroyings$),
        startWith(this.control.value),
        tap(value => this.history.unshift(value))
      )
      .subscribe();
  }

  setFormControl() {
    this.control.setValue("sreng");
  }

  toggleFormEnable() {
    if (this.control.enabled) {
      this.control.disable({ emitEvent: false });
    } else {
      this.control.enable({ emitEvent: false });
    }
  }

  clearHistory() {
    this.history = [];
  }

  ngOnDestroy() {
    this._destroyings$.next();
  }
}
