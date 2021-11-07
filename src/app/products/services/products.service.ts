import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/ApiResponse';


@Injectable()

export class ProductService {

  constructor(private http: HttpClient) { }


  getProducts(): Observable<ApiResponse> {  
    return this.get<ApiResponse>('products?_quantity=50')
  }

  get<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.http.get<T>(`${environment.api_url}${path}`, { params })
      // .pipe();
      // catchError(this.formatErrors)
  }
}
