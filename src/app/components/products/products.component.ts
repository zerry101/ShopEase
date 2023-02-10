import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { debounceTime, retry } from 'rxjs';
import { ApiService } from '../../service/api.service';
import { ShareDataService, userCart } from 'src/app/service/share-data.service';
// import { userCart } from 'src/app/service/share-data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public pictureData: Array<any> = [];
  public productData: Array<any> | undefined;

  search: any = 'Cars';
  perPage: any = 9;
  loading = true
  addToCartSwitch: boolean = false;

  constructor(public apiData: ApiService, public sharedData: ShareDataService) {
  }

  // public userCart: userCart[] | undefined;
  // addedToCart: any;
  // // public userCart: userCart[] | undefined;
  // addedToFavouriteProduct: boolean | undefined;
  // addedToProductCart: boolean | undefined;
  // productPrice: number | undefined;
  // productName: String | undefined;



  ngOnInit(): void {
    this.apiData.getPexelData(this.search, this.perPage);
    this.getData();
    // this.sharedData.userCart=this.pictureData;
  }

  private getData() {
    this.loading = true;
    this.apiData.getPexelData(this.search, this.perPage)
      .subscribe(
        {
          next: (res) => {
            // console.log(res);
            this.loading = false;
            this.pictureData = res.photos.map((data: any) => {
              data.addedToFavourite = false;
              data.addedToCart = false;

              return { addedToFavourite: data.addedToFavourite, image: data.src.original, name: data.alt, price: data.photographer_id, addedToCart: data.addedToCart };
            })
            console.log(this.pictureData);
            // console.log(this.pictureData[0][1]);
            // console.log(this.pictureData);

            // console.log(res);


          },

          error: (error) => {
            this.loading = false;
            console.log(error);
          }
        }
      )
  }

  public toggleFavorite(item: any) {
    item.addedToFavourite = !item.addedToFavourite;

    let data = this.pictureData
    return item.addedToFavourite;
  }


  public addToCart(item: any) {
    item.addedToCart = !item.addedToCart;

    item.addedToCart ? this.sharedData.userCart.push(item) : this.sharedData.userCart.splice(this.sharedData.userCart.indexOf(item), 1);


    // if (item.addedToCart == true) {
    //   this.sharedData.userCart.push(item);
    // }
    // else {
    //   this.sharedData.userCart.splice(this.sharedData.userCart.indexOf(item), 1)
    //   // console.log("indexofitem"+this.sharedData.userCart.indexOf(item));

    // }


    // this.sharedData.userCart!.productName = item.alt;
    // this.sharedData.userCart!.addedToFavouriteProduct = item.addedToFavourite;
    // this.sharedData.userCart!.addedToProductCart = item.addedToCart;

    // item.addedToCart=this.sharedData.userCart!.addedToProductCart


    console.log(this.sharedData.userCart);

    // console.log(this.sharedData.userCart!.productPrice);


    // console.log(item.addToCartSwitch);
    return item.addedToCart;

  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   // throw new Error('Method not implemented.');
  //   console.log(changes);


  // }


}
