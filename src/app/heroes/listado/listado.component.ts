import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',  
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Tor', 'Capitán América'];


  heroeBorrado: string | undefined = "";

  borrarHeroe(): void{
    //this.heroes.splice(indice, 1);
    this.heroeBorrado = this.heroes.pop() || '';
  }

}
