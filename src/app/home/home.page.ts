import { Component } from '@angular/core';
import { FacuService } from '../services/facu.service';
import { FacuResponse } from '../interfaces/facu';
import { NavigationExtras, Router } from '@angular/router';
import { AlumnoResponse } from '../interfaces/alumno';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public list_facu:FacuResponse[]=[];
  public list_alumno:AlumnoResponse[]=[];
  id_carrera_seleccionada;
  alumno_seleccionado:AlumnoResponse;
  constructor(private serviceFacu:FacuService,private router: Router) {

  }

  ngOnInit(){
      this.serviceFacu.getFacultades()
      .subscribe(resp=>{
        //console.log(resp);
            this.list_facu= JSON.parse(JSON.stringify(resp));
      });
  }

  getAlumnos(){
    
      this.serviceFacu.getAlumnosPorFacultad(this.id_carrera_seleccionada)
      .subscribe(resp=>{
          console.log(resp);
          this.list_alumno= JSON.parse(JSON.stringify(resp));
          
                    
      });
  }

  motrarDatosAlumno(item:AlumnoResponse){
    let navigationExtras: NavigationExtras = {
      state: {
        alumno_seleccionado:  item,
      }
    };
    this.router.navigate(['/detalle-alumno'], navigationExtras);
  }
}
