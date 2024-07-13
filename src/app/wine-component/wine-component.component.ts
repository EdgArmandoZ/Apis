import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { WineServiceService } from '../wineService/wine-service.service';


@Component({
  selector: 'app-wine-component',
  standalone: true,
  imports: [HttpClientModule],
  providers:[WineServiceService],
  templateUrl: './wine-component.component.html',
  styleUrl: './wine-component.component.css'
})
export class WineComponentComponent {
  cocteles: any[]=[];

  constructor(private coctelServicio: WineServiceService){}
 
  ngOnInit(): void{
   this.coctelServicio.obtenerCocteles().subscribe(datos => {
     this.cocteles = datos.drinks;
   });
  }
}
