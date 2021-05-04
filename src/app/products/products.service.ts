import { AuthService } from './../auth/auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http : HttpClient, private _authService : AuthService) { }

  getProducts() {
    return this._http.get("http://localhost:3000/products", {
      headers : new HttpHeaders().set("token",this._authService.checkUserStatus())
    });

   
    
  }
}
