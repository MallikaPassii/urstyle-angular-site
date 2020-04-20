import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { FootwearComponent } from './footwear/footwear.component';
import { FragrancesComponent } from './fragrances/fragrances.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';


@NgModule({
  declarations: [FootwearComponent, FragrancesComponent, MenComponent, WomenComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
