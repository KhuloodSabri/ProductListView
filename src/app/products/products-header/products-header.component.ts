import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent {

  avgPrice = 0;

  @Input() set productsPrices(productsPrices: number[]) {
    
    if (productsPrices.length == 0) {
      this.avgPrice = 0.0;
    }

    let sum = 0.0;

    productsPrices.forEach((price) => {
      sum += price;
    })

    console.log(sum);
    this.avgPrice = 1.0 * sum / productsPrices.length;
  };

  @Output() refresh = new EventEmitter<any>();


}
