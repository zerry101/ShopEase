import { Component, OnInit } from '@angular/core';
import { debounceTime, retry } from 'rxjs';
import { ApiService } from '../../service/api.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  pictureData: Array<any> = [];
  search: any = 'devices';
  perPage: any = 9;
  loading = true;
  addToCartSwitch: boolean = false;

  constructor(public apiData: ApiService) {
  }

  ngOnInit(): void {
    this.apiData.getPexelData(this.search, this.perPage);
    this.getData();
  }

  private getData() {
    this.loading = true;
    this.apiData.getPexelData(this.search, this.perPage)
      .subscribe(
        {
          next: (res) => {
            this.loading = false;
            this.pictureData = res.photos.map((data: any) => {
              data.addedToFavourite = false;
              data.addedToCart = false
              return data;
            })
            console.log(this.pictureData);
            console.log(res);
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
    // console.log(item.addToCartSwitch);
    return item.addedToCart;

  }
}
