import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {
  /* @Input() personajes: Personaje[] = []; */

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  };  
  

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter(); 

  agregar(){
    if(this.nuevo.nombre.trim().length === 0) { return;}
    console.log(this.nuevo); 
    /* this.personajes.push(this.nuevo);      */

    // this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    };
    return this.nuevo;    
  }

  constructor( private dbzService: DbzService){}

}
