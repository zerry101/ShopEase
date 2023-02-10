import { Component, OnChanges, SimpleChanges } from '@angular/core';
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


  dataIndex:number | undefined;


  constructor(public sharedData:ShareDataService){
    // console.log(sharedData);

  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   // throw new Error('Method not implemented.');

  // }
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

  removeItem(index:number,item:any){
// this.sharedData.userCart.addedToCart=false ;
console.log(this.sharedData.userCart);
this.sharedData.userCart[index].addedToCart=false;
this.sharedData.userCart.splice(index,1);

console.log(this.sharedData.userCart[index]);



  }


  removeAll(){
this.sharedData.userCart.splice(0,this.sharedData.userCart.length)
  }

}
