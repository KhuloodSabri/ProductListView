import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsHeaderComponent } from './products-header/products-header.component';
import { ProductService } from './services/products.service';
import { ProductCardComponent } from './product-card/product-card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule, 
    SharedModule, 
  ],
  declarations: [ProductsComponent, ProductsHeaderComponent, ProductCardComponent],
  exports: [ProductsComponent],
  providers:[
    {provide: ProductService, useClass: ProductService}
  ]
})
export class ProductsModule { }
