import { Component, OnInit } from '@angular/core';
import { Product } from './models/Product';
import { ProductService } from './services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  prices: number[];
  errorExistes: boolean;
  
  constructor(private productsService: ProductService) { 
    this.products = [];
    this.prices = [];
    this.errorExistes = false;
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this.errorExistes = false;
    
    this.productsService.getProducts().subscribe(
        data => { 
          this.products = data.data;
          this.prices = this.products.map(product => parseFloat(product.price));
        },
        error => { 
          this.products = [];
          this.prices = [];
          this.errorExistes = true;
        }
      ) 
  }
}
