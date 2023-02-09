import { Injectable } from '@angular/core';




export interface userCart
{
  addedToFavouriteProduct:boolean|undefined;
  addedToProductCart:boolean|undefined;
  productPrice:number|undefined;
  productName:String|undefined;
}

@Injectable({
  providedIn: 'root'
})


export class ShareDataService {
  addedToCart: any;

  constructor() { }

public  userCart:userCart={
  addedToFavouriteProduct: undefined,
  addedToProductCart: undefined,
  productPrice: undefined,
  productName: undefined
} ;
}
