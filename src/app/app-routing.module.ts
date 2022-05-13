import { SafeCall } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultImageComponent } from './view/modules/default-image/default-image.component';
import { LoginComponent } from './view/modules/login/login/login.component';
import { NavButtonsComponent } from './view/modules/nav-buttons/nav-buttons.component';
import { PageModelComponent } from './view/modules/page-model/page-model/page-model.component';
import { RoboListComponent } from './view/modules/robo/robo-list/robo-list.component';
import { SalesListComponent } from './view/modules/sales/sales-list/sales-list.component';

const routes: Routes = [
  { path: 'page',component: PageModelComponent, children: [
    { path: "salesList", component: SalesListComponent },
    { path: "roboClients", component: RoboListComponent },
  ]},
  { path: '**', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
