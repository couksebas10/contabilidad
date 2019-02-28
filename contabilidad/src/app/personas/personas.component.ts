import { Component, OnInit } from "@angular/core"
import { ContabilidadService } from "../contabilidad.service"
import { Persona } from '../model/persona.model';

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

  insertarPersona() {
    
    let body = new Persona(null,"prueba_angular23242","lorem2wqe3",55,"user")
    this.contabilidad.postPersona(body).subscribe(result => {
      
    })
  }
}
