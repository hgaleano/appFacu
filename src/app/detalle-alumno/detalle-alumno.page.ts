import { Component, OnInit } from '@angular/core';
import {  Router,ActivatedRoute,NavigationExtras } from "@angular/router";
import { AlumnoResponse } from '../interfaces/alumno';
@Component({
  selector: 'app-detalle-alumno',
  templateUrl: './detalle-alumno.page.html',
  styleUrls: ['./detalle-alumno.page.scss'],
})
export class DetalleAlumnoPage implements OnInit {
  alumno_seleccionado:AlumnoResponse;
  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) { 

    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.alumno_seleccionado = this.router.getCurrentNavigation().extras.state.alumno_seleccionado;
      
      }
    });
  }

  ngOnInit() {
  }

}
