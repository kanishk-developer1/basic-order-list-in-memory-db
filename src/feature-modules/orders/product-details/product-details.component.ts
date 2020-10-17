import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SharedService } from '../../../core/services/shared.service'


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 productInfo:any;
  constructor(
    private shared:SharedService, 
    private activeRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {
    const orderId= this.activeRoute.snapshot.params.id;
    if(orderId){
      this.shared.getOrderDetail(orderId).subscribe(res=>{
        this.productInfo= res || {};
      })
    }
  }

}
