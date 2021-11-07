import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsHeaderComponent } from './products-header/products-header.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/products.service';
import { ProductCardComponent } from './product-card/product-card.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule, 
    HttpClientModule,  
  ],
  declarations: [ProductsComponent, ProductsHeaderComponent, ProductCardComponent],
  exports: [ProductsComponent],
  providers:[
    {provide: ProductService, useClass: ProductService}
  ]
})
export class ProductsModule { }
