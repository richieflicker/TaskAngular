import { Component } from '@angular/core';
import productData from '../api/products/products.json';  
interface Product {  
  productId: Number;  
  productName: String;  
  productCode: String;  
  description: String;  
}  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interviewtask';
  name = 'Angular';  
  product: Product[] = productData;  
}
