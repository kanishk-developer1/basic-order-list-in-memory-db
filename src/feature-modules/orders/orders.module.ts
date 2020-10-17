import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersWrapComponent } from './orders-wrap/orders-wrap.component';
import { ListComponent } from './list/list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [OrdersWrapComponent, ListComponent, ProductDetailsComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    MatTableModule,
    MatIconModule,
    MatCardModule
  ]
})
export class OrdersModule { }
