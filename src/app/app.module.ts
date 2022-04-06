import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesListComponent } from './view/modules/sales/sales-list/sales-list.component';
import { HeaderComponent } from './view/modules/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyBrlPipe } from './pipe/currencyBrl.pipe';
import { MomentModule } from "ngx-moment";
import { SalesModule } from './view/modules/sales/sales.module';
import { NavButtonsComponent } from './view/modules/nav-buttons/nav-buttons.component';
import { OrderModule } from 'ngx-order-pipe';
import { ClipboardModule } from 'ngx-clipboard';


@NgModule({
  declarations: [
    AppComponent,
    SalesListComponent,
    NavButtonsComponent,
    HeaderComponent,
    CurrencyBrlPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MomentModule,
    SalesModule,
    OrderModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
