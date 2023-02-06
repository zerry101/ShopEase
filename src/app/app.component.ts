import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit  {
  title = 'ShopEase';
  search:any='nature';
  perPage:any=1;

  constructor(private modalService: NgbModal) {
  }
  ngOnInit(): void {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  // data:any;



}
