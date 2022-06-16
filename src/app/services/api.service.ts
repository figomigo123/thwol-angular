import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/Category';
import { ApiUrl } from './server-url';
const serverURL = ApiUrl + 'categories/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  save(cat: any, className: string) {
    return this.http.post(ApiUrl + className, cat, httpOptions);
  }
  del(id: string, className: string) {
    return this.http.delete(ApiUrl + className+"/" + id, httpOptions);  
  }
  getById(id: string, className: string) {
    return this.http.get(ApiUrl + className + "/" + id, httpOptions);    
  }

  getPage(className:string,page:number): Observable<any> {
    return this.http.get(ApiUrl + className+'?page='+page, httpOptions);
  }
  getAll(className: string): Observable<any> {
    return this.http.get(ApiUrl + className , httpOptions);
  }

}
