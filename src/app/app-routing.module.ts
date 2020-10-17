import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../core/components/not-found/not-found.component';
import { CoreModule } from '../core/core.module'

const routes: Routes = [
  {path: '', redirectTo: 'orders', pathMatch: 'full'},
  {
    path: 'orders',
    loadChildren: ()=> import('../feature-modules/orders/orders.module').then(m=> m.OrdersModule)
  },
  {path: '404', component: NotFoundComponent},
 {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CoreModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
