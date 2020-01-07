import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";

import { FormsRoutingModule } from "./forms-routing.module";
import { FormInputComponent } from "./form-input/form-input.component";
import { FormInputValidatorComponent } from "./form-input-validator/form-input-validator.component";
import { FormControlsComponent } from "./form-controls/form-controls.component";

@NgModule({
  declarations: [
    FormInputComponent,
    FormInputValidatorComponent,
    FormControlsComponent
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule
  ]
})
export class AppFormsModule {}
