import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { ProductsComponent } from './products/products/products.component';
import { HomeComponent } from './misc/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './products/details/details.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: "home", component: HomeComponent, canActivate: [AuthGuard]},
  {path: "products", component: ProductsComponent,  canActivate: [AuthGuard]},
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "products/:pId", component: DetailsComponent,  canActivate: [AuthGuard]},
  {path: "login", component:LoginComponent},
  {path: "**", redirectTo: "home"},
  {path:"AppConfig", component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
