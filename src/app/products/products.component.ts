import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Product } from './models/Product';
import { ProductService } from './services/products.service';
import { CommonModule } from "@angular/common";


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  prices: number[];
  
  constructor(private productsService: ProductService) { 
    this.products = [];
    this.prices = [];
  }

  ngOnInit() {
    
  }

  getProducts(){
    this.productsService.getProducts().subscribe(
        data => { 
          this.products = data?.data;
          this.prices = this.products.map(product => parseFloat(product.price));
          console.log('prices', this.prices)
        },
        error => { 
          console.log("error", error);
        }
      ) 
  }
}
