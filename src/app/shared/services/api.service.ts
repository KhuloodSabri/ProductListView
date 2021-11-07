import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
  ) {}

  get<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.http.get<T>(`${environment.api_url}${path}`, { params });
  }

  put<T>(path: string, body: Object = {}): Observable<T> {
    return this.http.put<T>(
      `${environment.api_url}${path}`,
      JSON.stringify(body)
    )
  }

  post<T>(path: string, body: Object = {}): Observable<T> {
    return this.http.post<T>(
      `${environment.api_url}${path}`,
      JSON.stringify(body)
    )
  }

  delete<T>(path: string): Observable<T> {
    return this.http.delete<T>(
      `${environment.api_url}${path}`
    )
  }
}
