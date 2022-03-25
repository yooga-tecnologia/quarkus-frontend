import { SafeCall } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavButtonsComponent } from './view/modules/nav-buttons/nav-buttons.component';
import { SalesListComponent } from './view/modules/sales/sales-list/sales-list.component';

const routes: Routes = [
  {
    path: '',
    children: [{ path: 'salesList', component: SalesListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
