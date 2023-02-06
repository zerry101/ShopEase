import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs';
import { ApiService } from '../../service/api.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  pictureData: any;
  search: any = 'devices';
  perPage: any = 9;

  constructor(public apiData: ApiService) {
  }

  ngOnInit(): void {
    this.apiData.getPexelData(this.search, this.perPage);
    this.getData();
  }

  private getData() {
    this.apiData.getPexelData(this.search, this.perPage)
      .pipe(debounceTime(5000))
      .subscribe(
        {
          next: (res) => {
            this.pictureData = res.photos.map((data: any) => {
              data.addedToFavourite = true;
              return data;
            })
            console.log(this.pictureData);
            console.log(res);

          },
          error: (error) => {
            console.log(error);
          }
        }
      )
  }

  public toggleFavorite(item: any) {
    item.addedToFavourite = !item.addedToFavourite;
    return item.addedToFavourite;
  }
}
