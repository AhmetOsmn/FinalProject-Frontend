import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { listResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'https://localhost:44304/api/';

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<listResponseModel<Product>> {
   
      let newPath = this.apiUrl + "products/getall"
      return this.httpClient.get<listResponseModel<Product>>(newPath);
  }

  getProductsByCategory(categoryId:number):Observable<listResponseModel<Product>> {
    let newPath = this.apiUrl + "products/getbycategory?categoryId="+categoryId;
    return this.httpClient.get<listResponseModel<Product>>(newPath);
}
}
