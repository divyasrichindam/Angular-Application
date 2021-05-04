import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  productCode: any;

  constructor(private _activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe((data) => {
      this.productCode = data;
      console.log(data)
    })
  }

}
