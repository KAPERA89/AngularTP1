import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  products! : Array<any>;
  errorMessage! : string;

  constructor(private productService:ProductService) {}

  ngOnInit(): void {
      this.productService.getAllProducts().subscribe({
        next : (data) => {
          this.products = data;
        },
        error: (err) => {
          this.errorMessage=err
        }
      });
  }

  handleDeleteProduct(arg0: any) {
        let index = this.products.indexOf(arg0);
        //delete this.products[index];
        // combien d'element a supprimer depuis index
        this.products.splice(index, 1); 


      
    }
} 
