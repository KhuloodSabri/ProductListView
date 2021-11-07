import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { ApiResponse } from '../models/ApiResponse';
import { ApiService } from '../../shared/services/api.service';


@Injectable()

export class ProductService {

  constructor(private apiService: ApiService) { }


  getProducts(): Observable<ApiResponse> {  
    return this.apiService.get<ApiResponse>('products', new HttpParams().set('_quantity', 50));
  }
}
