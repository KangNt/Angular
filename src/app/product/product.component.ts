import { Component, OnInit } from '@angular/core';
import { Product }  from './Product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title :  string  ="View to Component";
    product : Product = {
    id :1 ,
    name : "Product 1",
    price: 20,
    desc: 'Mô tả sản phẩm',
    linkImage : 'https://innovatemap.wpengine.com/wp-content/uploads/2019/09/better-product-cover-1.png',
    linkProfile: 'https://getbootstrap.com/docs/4.3/getting-started/introduction/'
  };
  
  constructor() { }
 
  ngOnInit() {
  }
  onClickMe = event => {

    this.title = 'Event Binding';
  }

  handleKeyUp = event => {
    this.product.id = event.target.value;

  }

}
