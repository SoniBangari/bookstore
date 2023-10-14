import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {
  @Input() item: Product | undefined;
  @Output() removeFromCart: EventEmitter<number> = new EventEmitter();
  @Output() cartTotal: EventEmitter<number> = new EventEmitter();

  removeProduct(id: number) {
    this.removeFromCart.emit(id)
  }
  add(item:any){
    if( item.price.qut<10)
    {
    //console.log(item);
    item.price.qut+=1;
    const newTotal = item.price.value * item.price.qut;
      this.cartTotal.emit(newTotal);
    }


  }
  sub(item:any){
    if( item.price.qut>1)
    {
    //console.log(item);
    item.price.qut-=1;
    const newTotal = item.price.value * item.price.qut;
      this.cartTotal.emit(newTotal);
    }

  }

}
