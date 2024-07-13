import { Component, } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { TequilaServiceService } from '../tequilaService/tequila-service.service';


@Component({
  selector: 'app-tequila-component',
  standalone: true,
  imports: [HttpClientModule],
  providers:[TequilaServiceService],
  templateUrl: './tequila-component.component.html',
  styleUrl: './tequila-component.component.css'
})
export class TequilaComponentComponent {
  cocteles: any[]=[];

  constructor(private coctelServicio: TequilaServiceService){}
 
  ngOnInit(): void{
   this.coctelServicio.obtenerCocteles().subscribe(datos => {
     this.cocteles = datos.drinks;
   });
  }
}
