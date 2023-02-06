import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ApiService } from '../../service/api.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(public apiData: ApiService) {
    this.apiData.getPexelData(this.search, this.perPage);
  }

  search: any = 'devices';
  perPage: any = 9;

  cartList: Subject<any> = new Subject<any>();

  ngOnInit(): void {
    this.logsData();
    this.getData();
  }


  pictureData: any;
  getData() {
    this.apiData.getPexelData(this.search, this.perPage).subscribe((res: any) => {
      this.pictureData = res.photos.map((data: any) => {
        data.addedToFavourite = true;
        return data;
      })
      console.log(this.pictureData);
      this.cartList.next(res.photos);
      this.cartList.next(res.photos.map((data: any) => {
        data.addedToFavourite = false;
        return data;
      }));
    }, (error) => {
      console.log(error);
    })
  }

  toggleFavorite(item: any) {
    item.addedToFavourite = !item.addedToFavourite;
    return item.addedToFavourite;
  }

  logsData() {
    this.cartList.subscribe(res => {
      console.log(res);
    })
  }
}
