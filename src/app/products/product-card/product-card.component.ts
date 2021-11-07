import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  constructor() {
    this.product = {
      name: '',
      image: '',
      tags: [], 
      price: '0',
      description: ''
    };
   }

  @Input() product: Product;

  ngOnInit() {
    
  }

}
