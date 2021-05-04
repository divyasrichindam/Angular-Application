import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products/products.component';
import { ProductsPipe } from './products/products.pipe';
import { HomeComponent } from './misc/home/home.component';
import { PanelBoxComponent } from './panel/panel-box/panel-box.component';
import { RatingComponent } from './products/rating/rating.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { DetailsComponent } from './products/details/details.component';
import { LoginComponent } from './auth/login/login.component';
import { AppConfigComponent } from './app-config/app-config.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductsPipe,
    HomeComponent,
    PanelBoxComponent,
    RatingComponent,
    NavbarComponent,
    DetailsComponent,
    LoginComponent,
    AppConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
