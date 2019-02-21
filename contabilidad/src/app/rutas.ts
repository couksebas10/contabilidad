import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { PersonasComponent } from './personas/personas.component';

const rutas = [
  {
    path: '',
    component: AppComponent
  },
  {
      path: 'personas-admin',
      component: PersonasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule]
})
export class Rutas {}
