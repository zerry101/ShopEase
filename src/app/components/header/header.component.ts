import { Component, EventEmitter, Output } from '@angular/core';
import { ShareDataService } from 'src/app/service/share-data.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  @Output() onCartOpen : EventEmitter<any> = new EventEmitter();
  constructor(public sharedData:ShareDataService){

  }

  // length:Number=this.sharedData.userCart



  onCartOpenClick(){
    this.onCartOpen.emit();
  }
}
