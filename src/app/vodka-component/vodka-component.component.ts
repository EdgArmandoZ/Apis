import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { VodkaServiceService } from '../vodkaService/vodka-service.service';


@Component({
  selector: 'app-vodka-component',
  standalone: true,
  imports: [HttpClientModule],
  providers:[VodkaServiceService],
  templateUrl: './vodka-component.component.html',
  styleUrl: './vodka-component.component.css'
})
export class VodkaComponentComponent {
  cocteles: any[]=[];

  constructor(private coctelServicio: VodkaServiceService){}
 
  ngOnInit(): void{
   this.coctelServicio.obtenerCocteles().subscribe(datos => {
     this.cocteles = datos.drinks;
   });
  }
}
