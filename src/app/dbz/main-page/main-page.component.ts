import { Component} from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',  
})
export class MainPageComponent {
  
  nuevo: Personaje = {
    nombre: 'Trucks',
    poder: 14000
  }  

  /* cambiarNombre( event: any){
    console.log(event.target.value)
  }  */ 

  get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }

  agregarNuevoPersonaje(personaje: Personaje){
    /* console.log('Main Page Component');
    console.log(personaje); */    
    this.personajes.push(personaje);
  }
  //Ejemplo de inyección de dependencias
  constructor(private dbzService: DbzService){
    //this.personajes = this.dbzService.personajes;
  }

}
