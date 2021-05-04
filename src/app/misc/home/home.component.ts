import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `<p><span>"{{val}}"</span></p>
  <p>"<span [innerHTML]="val"></span>"</p>
  `,
  //templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  val = 'START <script>console.log("test")</script>end'
  constructor() { }

  ngOnInit() {

  }

}
