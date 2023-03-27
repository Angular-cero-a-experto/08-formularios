import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../services/pais.service';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit{

  usuario = {
    nombre: 'Fernando',
    apellido: 'Herrera',
    correo: 'fernando@gmail.com',
    pais: 'CR',
    genero: 'M'
  }

  paises: any[] = [];

  constructor( private paisService: PaisService ) {}

  ngOnInit(): void {
    this.paisService.getPaises().subscribe( data =>{
      this.paises = data;

      this.paises.unshift({
        nombre: '[Seleccione  pais]',
        codigo: ''
      })

      // console.log(data);

    });
  }

  guardar( form: NgForm ) {
    console.log(form);

    if( form.invalid ){

      Object.values( form.controls ).forEach( control => {
        control.markAllAsTouched();  
      });

      return
    }
    console.log(form.value);
  }

  getPais( ) {
  }
}
