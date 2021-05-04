import { ProductsService } from '../products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  pageTitle : String = "Products";

  products : any = [];

  showHideImg : Boolean = true;

  constructor(private _productService : ProductsService ) {
   
   }

  ngOnInit() {
    this.products = this._productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  toggleImage() {
    this.showHideImg = !this.showHideImg;
  }

  receiveDataFromChild(rating: string) {
    this.pageTitle = rating;
  }
}
