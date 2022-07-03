import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUrl } from './server-url';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  params = new HttpParams();



  getSubDepChild(className: string, parentId: string): Observable<any> {
    this.params.delete;
    this.params.append('subDepartmentId', parentId);
    return this.http.get(ApiUrl + className + '/subDepartment?subDepartmentId=' + parentId, httpOptions);
  }
  getDepChild(className: string, depId: string): Observable<any> {

    console.log("depid:" + depId);
    return this.http.get(ApiUrl + className + '/department?departmentId=' + depId, httpOptions);
  }
  constructor(private http: HttpClient) { }

  save(cat: any, className: string) {
    return this.http.post(ApiUrl + className, cat, httpOptions);
  }
  update(cat: any, className: string) {
    return this.http.put(ApiUrl + className, cat, httpOptions);
  }
  del(id: string, className: string) {
    return this.http.delete(ApiUrl + className + "/" + id, httpOptions);
  }
  getById(id: string, className: string) {
    return this.http.get(ApiUrl + className + "/" + id, httpOptions);
  }

  getPage(className: string, page: number): Observable<any> {
    return this.http.get(ApiUrl + className + '?page=' + page + '&size=3', httpOptions);
  }
  getAll(className: string): Observable<any> {
    return this.http.get(ApiUrl + className + '/all', httpOptions);
  }

}
