import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";
import { HttpClient, HttpResponse, HttpRequest, HttpHeaders } from "@angular/common/http";
import { Persona } from "./model/persona.model";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ContabilidadService {
  headers = new HttpHeaders({
    "Content-Type": "application/json; charset=utf8"
  });
  // options = new HttpRequest({ headers: this.headers })

  constructor(private http: HttpClient) {}

  getPersonas() : Observable<Persona[]>  {
    return this.http.get(environment.apiUrl + "/getUsuarios")
    .pipe(map((data: any[]) => data.map((item: any) => new Persona (
      item._id,
      item.nombre,
      item.apellidos,
      item.edad,
      item.rol
    ))),
    )
  }

  private extraerData(res: Response) {
    let body = res.json();
    console.log(body);
    
    return body || [];
  }
}
