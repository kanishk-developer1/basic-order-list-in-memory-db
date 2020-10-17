import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as env from '../../environments/environment';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  apipath= env.environment.api_url;
  constructor(private http:HttpClient) { }

  /**
   * @description get orders list
   */
  getOrders():Observable<any>{
    return this.http.get(`${this.apipath}orders`).pipe(map((data)=>{
      return data;
    }));
  }

  /**
   * @description get order detail
   * @param id order id
   */
  getOrderDetail(id){
    return this.http.get(`${this.apipath}orders/${id}`).pipe(map((data)=>{
      return data;
    }))
  }
}
