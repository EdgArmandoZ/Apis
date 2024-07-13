import { Routes } from '@angular/router';
import { MargaritaComponentComponent } from './margarita-component/margarita-component.component';
import { VodkaComponentComponent } from './vodka-component/vodka-component.component';
import { TequilaComponentComponent } from './tequila-component/tequila-component.component';
import { WineComponentComponent } from './wine-component/wine-component.component';

export const routes: Routes = [
    
    {
        path: '',
        component: MargaritaComponentComponent,
      
  },

  {
    path: 'margarita',
    component: MargaritaComponentComponent,
  
},
  
  {
      path: 'vodka',
      component: VodkaComponentComponent,
    
  },
  
   {
     path: 'tequila',
     component: TequilaComponentComponent,
   
  },


{
    path: 'wineService',
    component: WineComponentComponent,
  
},

  
];
