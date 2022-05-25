import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SalesListComponent } from './view/modules/sales/sales-list/sales-list.component';
import { HeaderComponent } from './view/modules/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyBrlPipe } from './pipe/currencyBrl.pipe';
import { MomentModule } from "ngx-moment";
import { NavButtonsComponent } from './view/modules/nav-buttons/nav-buttons.component';
import { OrderModule } from 'ngx-order-pipe';
import { ClipboardModule } from 'ngx-clipboard';
import { DefaultImageComponent } from './view/modules/default-image/default-image.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RoboListComponent } from './view/modules/robo/robo-list/robo-list.component';
import { LoginComponent } from './view/modules/login/login/login.component';
import { PageModelComponent } from './view/modules/page-model/page-model/page-model.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from "ng2-search-filter";


@NgModule({
  declarations: [
    AppComponent,
    SalesListComponent,
    NavButtonsComponent,
    HeaderComponent,
    CurrencyBrlPipe,
    DefaultImageComponent,
    RoboListComponent,
    LoginComponent,
    PageModelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MomentModule,
    OrderModule,
    ClipboardModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
