import { AuthService } from './../../auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  authStatus : boolean;

  constructor(private _authService : AuthService) { }

  ngOnInit() {
    this.authStatus = JSON.parse(this._authService.checkUserStatus());
    this._authService.$authCheck.subscribe((data: any) => {
      this.authStatus = data;
    });
  }

  logout() {
    this._authService.logout()
  }

}
