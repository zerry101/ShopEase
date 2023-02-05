import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ApiService } from './service/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit  {
  title = 'ShopEase';
  search:any='nature';
  perPage:any=1;

  constructor(private modalService: NgbModal,public apiData:ApiService) {
    this.apiData.getPexelData(this.search,this.perPage);
  }
  ngOnInit(): void {
    this.getData();
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  // data:any;

  pictureData:any;
  getData(){
    this.apiData.getPexelData(this.search,this.perPage).subscribe(res=>{
      console.log(res.photos[0].url);
      this.pictureData=res.photos[0].url;

    },(error)=>{console.log(error);
    })
    }
  // }

}
