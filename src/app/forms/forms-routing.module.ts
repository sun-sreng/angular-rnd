import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormInputComponent } from "./form-input/form-input.component";
import { FormInputValidatorComponent } from "./form-input-validator/form-input-validator.component";
import { FormControlsComponent } from "./form-controls/form-controls.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "input",
        component: FormInputComponent,
        data: { title: "Basic", breadcrumb: "BASIC" }
      },
      {
        path: "input-validator",
        component: FormInputValidatorComponent,
        data: { title: "Basic", breadcrumb: "BASIC" }
      },
      {
        path: "controls",
        component: FormControlsComponent,
        data: { title: "Basic", breadcrumb: "BASIC" }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {}
