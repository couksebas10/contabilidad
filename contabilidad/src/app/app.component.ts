import { Component } from '@angular/core'
import { ContabilidadService } from './contabilidad.service'

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "contabilidad"

  constructor(private contabilidad: ContabilidadService) {}

  ngOnInit(): void {
    
  }
}
