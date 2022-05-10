import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {FacuResponse} from '../interfaces/facu'
import { AlumnoResponse } from '../interfaces/alumno';

@Injectable({
  providedIn: 'root'
})
export class FacuService {

  constructor(private http:HttpClient) { }

  getFacultades(){
   return  this.http.get<FacuResponse>("https://www.hostcatedral.com/api/appNoti/public/GetCarreras")
  }

  getAlumnosPorFacultad(id){
    return  this.http.get<AlumnoResponse>("https://www.hostcatedral.com/api/appNoti/public/getAlumnosPorCarreraID/" + id)
   }
}
