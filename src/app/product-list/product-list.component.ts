import { Component, OnInit } from '@angular/core';
import productData from '../../api/products/products.json';  

interface Product {  
  productId: Number;  
  productName: String;  
  productCode: String;  
  description: String; 
  cuisines:string;
  price:Number;
  items:string;
  deliveryTime:Number;
  starRating:Number;
  imageUrl:String ;
  coupons:String ;
  pr:String
}  
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  product: Product[] = productData;  

}
