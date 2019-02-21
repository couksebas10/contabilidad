import { BrowserModule } from "@angular/platform-browser"
import { NgModule } from "@angular/core"

import { ContabilidadService } from "./contabilidad.service"
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { HttpClientModule } from "@angular/common/http"
import { PersonasComponent } from "./personas/personas.component";
import { Rutas } from "./rutas";

@NgModule({
  declarations: [AppComponent, PersonasComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Rutas
  ],
  providers: [ContabilidadService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
