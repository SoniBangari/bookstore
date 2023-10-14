import { Component, EventEmitter,Input,Output } from '@angular/core';
interface Product {
  ISBN: number;
  title: string;
  author: string;
  summary: string;
  image: string;
  price: {
  currency: string;
  value: number;
  displayValue: string;
  qut:number;
}
}
@Component({   
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() product: Product | undefined;
  @Output() addProduct: EventEmitter<Product> = new EventEmitter();

  addToCart(product:Product) {
    this.addProduct.emit(product);
  }
}
