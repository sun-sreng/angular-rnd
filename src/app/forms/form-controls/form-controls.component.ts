import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-form-controls",
  templateUrl: "./form-controls.component.html",
  styleUrls: ["./form-controls.component.scss"]
})
export class FormControlsComponent implements OnInit {
  radioControl = new FormControl();
  selectControl = new FormControl();
  rangeControl = new FormControl(5);
  dateControl = new FormControl("2020-01-07");
  timeControl = new FormControl("09:00");
  colorControl = new FormControl("#0096ff");

  seasons: string[] = ["Winter", "Spring", "Summer", "Autumn"];
  foods: Food[] = [
    { value: "steak-0", viewValue: "Steak" },
    { value: "pizza-1", viewValue: "Pizza" },
    { value: "tacos-2", viewValue: "Tacos" }
  ];

  constructor() {}

  ngOnInit() {}
}
