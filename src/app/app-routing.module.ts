import { SafeCall } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesListComponent } from './view/modules/sales/sales-list/sales-list.component';

const routes: Routes = [
  
  {
    path: "salesList",
    component: SalesListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
