import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products! : Array<any>

  constructor() { 
    this.products = [
      {id:1, name: "Computer", price: 12000},
      {id:2, name: "Printer", price: 1500},
      {id:3, name: "Smart Phone", price: 8000},
    ];
  }

  public getAllProducts() : Observable<Array<any>>{
    //il ne retoure un objet de type observable qui nous permet de faire un subscribe
    if(1>2){
      return throwError(() => new Error("Probleeeeeeeeeeeeeeeeeeeme"))
    }
    else{
    return of(this.products); 
    }
  }

 
}
