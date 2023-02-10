import { Component } from '@angular/core';
import { ShareDataService } from 'src/app/service/share-data.service';
import { userCart } from 'src/app/service/share-data.service';
// import {pictureData}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements userCart {

  // @Input() myinputMsg:string;




  constructor(public sharedData:ShareDataService){
    // console.log(sharedData);

  }
  productName: any;
  // productName: any;
  addedToFavourite: boolean | undefined;
  addedToProductCart: boolean | undefined;
  image: String | undefined;
  addedToCart: Boolean | undefined;
  price: number | undefined;
  name: String | undefined;

  // prodPrice:number|undefined=this.sharedData.userCart.productPrice;


  // console.log();

  removeItem(): void{
// this.sharedData.userCart.addedToProductCart=false;
// console.log(this.sharedData.userCart);

  }

}
