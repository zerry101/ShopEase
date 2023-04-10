import { Injectable } from '@angular/core';




export interface userCart
{
 productName: any;
  addedToFavourite:boolean|undefined;
  addedToProductCart:boolean|undefined;
  image:String|undefined;
  addedToCart:Boolean|undefined;
  price:number|undefined;
  name:String|undefined;
}

@Injectable({
  providedIn: 'root'
})


export class ShareDataService {
  addedToCart: any;

  constructor() { }

public  userCart:userCart[]=[];




}
