// import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component } from '@angular/core';
import { ShareDataService } from 'src/app/service/share-data.service';
import { userCart } from 'src/app/service/share-data.service';
// import {pictureData}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent implements userCart {

  // @Input() myinputMsg:string;


  dataIndex: number | undefined;

  // totalPrice!:any;
  totalPrice: Number | undefined;

  constructor(public sharedData: ShareDataService) {
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

  removeItem(index: number, item: any) {
    // this.sharedData.userCart.addedToCart=false ;
    console.log(this.sharedData.userCart);
    this.sharedData.userCart[index].addedToCart = false;
    this.sharedData.userCart.splice(index, 1);

    console.log(this.sharedData.userCart[index]);

    // console.log(this.totalPrice);



  }


  removeAll() {
    this.sharedData.userCart.forEach(data => data.addedToCart = false);
    this.sharedData.userCart.splice(0, this.sharedData.userCart.length);

  }

  total(data:any){

    this.totalPrice = data.reduce((acc: any, item: any) => {
      console.log(acc);
      return acc + item.price;

    }, 0);

    return this.totalPrice;
  }







}
