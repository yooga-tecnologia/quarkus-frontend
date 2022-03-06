import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesListComponent } from './view/modules/sales/sales-list/sales-list.component';
import { HeaderComponent } from './view/modules/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesListComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
