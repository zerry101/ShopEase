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


  addedToFavouriteProduct: boolean | undefined;
  addedToProductCart: boolean | undefined;
  productPrice: number | undefined;
  productName: String | undefined;
  // sharedData: any;

  constructor(public sharedData:ShareDataService){
    // console.log(sharedData);

  }

  // prodPrice:number|undefined=this.sharedData.userCart.productPrice;


  // console.log();

  removeItem(){
// this.sharedData.userCart.addedToProductCart=false;
// console.log(pictureData);

  }

}
