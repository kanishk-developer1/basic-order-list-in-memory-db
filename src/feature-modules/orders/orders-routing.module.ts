import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdersWrapComponent } from './orders-wrap/orders-wrap.component';
import { ListComponent } from './list/list.component';
import { ProductDetailsComponent } from './product-details/product-details.component'

const routes: Routes = [
  {path: '', component: OrdersWrapComponent,
  children:[
    {path:'', pathMatch:'full', redirectTo:'list'},
    {path:'list', component:ListComponent},
    {path:'detail/:id', component: ProductDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
