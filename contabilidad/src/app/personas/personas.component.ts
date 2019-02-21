import { Component, OnInit } from "@angular/core"
import { ContabilidadService } from "../contabilidad.service"

@Component({
  selector: "app-personas",
  templateUrl: "./personas.component.html",
  styleUrls: ["./personas.component.scss"]
})
export class PersonasComponent implements OnInit {

  listPersonas: any = []

  constructor(private contabilidad: ContabilidadService) {}

  ngOnInit() {
    this.contabilidad.getPersonas().subscribe(result => {
      for (var i of result) {        
        this.listPersonas.push(i)
      }
    })
  }
}
