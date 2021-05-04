import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth: any = {};

  constructor(private _authService : AuthService) { }


  ngOnInit() {
  }

  login() {
    this._authService.login(this.auth);
  }
}
