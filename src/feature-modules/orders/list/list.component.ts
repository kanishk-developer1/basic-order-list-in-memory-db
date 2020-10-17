import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../core/services/shared.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  orderList=[];
  displayedColumns =['customer', 'No of Items', 'product', 'total price', 'status'];
  status=['Order Received','Preparing', 'Ready To Serve'];
  constructor(private shared:SharedService, private router:Router) { }

  ngOnInit(): void {
    this.fetchOrders();
  }

  /**
 * @description fetch order list
 */
fetchOrders(){
  this.shared.getOrders().subscribe(data=>{
    this.orderList= data;
  })
}

/**
 * @description change status of the order
 */
changeStatus(status,id){
  this.orderList= this.orderList.map(item=>{
    if(item.id === id){
      item.status= status  === 2 ? 2 : status +1;
    }
    return item;
  })
}

/**
 * @description navigate to order detail
 */
navigateToDetails(orderId){
   this.router.navigate([`orders/detail/${orderId}`]);
}

}
