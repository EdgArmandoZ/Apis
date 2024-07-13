import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MargaritaserviceService } from '../serviceMargarita/margaritaservice.service';

@Component({
  selector: 'app-margarita-component',
  standalone: true,
  imports: [HttpClientModule],
  providers:[MargaritaserviceService],
  templateUrl: './margarita-component.component.html',
  styleUrl: './margarita-component.component.css'
})
export class MargaritaComponentComponent {

  cocteles: any[]=[];

  constructor(private coctelServicio: MargaritaserviceService){}
 
  ngOnInit(): void{
   this.coctelServicio.obtenerCocteles().subscribe(datos => {
     this.cocteles = datos.drinks;
   });
}
}
