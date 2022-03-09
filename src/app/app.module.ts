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


@NgModule({
  declarations: [
    AppComponent,
    SalesListComponent,
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
    SalesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
