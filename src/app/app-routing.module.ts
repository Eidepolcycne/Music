import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BiographieComponent } from './biographie/biographie.component';
import { CoursComponent } from './cours/cours.component';
import { FormationComponent } from './formation/formation.component';
import { TarifComponent } from './tarif/tarif.component';

const routes: Routes = [
  {    
    path: '',
    component: HomeComponent,
  },
  {    
    path: 'biographie',
    component: BiographieComponent,
  },
  {    
    path: 'cours',
    component: CoursComponent,
  },
  {    
    path: 'formation',
    component: FormationComponent,
  },
  {    
    path: 'tarif',
    component: TarifComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
