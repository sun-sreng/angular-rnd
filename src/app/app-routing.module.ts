import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "forms",
    pathMatch: "full"
  },
  {
    path: "forms",
    loadChildren: () =>
      import("./forms/forms.module").then(m => m.AppFormsModule),
    data: { title: "Choose A Demo" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
