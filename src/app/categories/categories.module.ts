import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { FootwearComponent } from './footwear/footwear.component';
import { FragrancesComponent } from './fragrances/fragrances.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [FootwearComponent, FragrancesComponent, MenComponent, WomenComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
