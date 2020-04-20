import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FootwearComponent } from './footwear/footwear.component';
import { FragrancesComponent } from './fragrances/fragrances.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';


const routes: Routes = [
  {
    path: 'footwear',
    component: FootwearComponent
  },
  {
    path: 'frangrances',
    component: FragrancesComponent
  },
  {
    path: 'men',
    component: MenComponent
  },
  {
    path: 'women',
    component: WomenComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
