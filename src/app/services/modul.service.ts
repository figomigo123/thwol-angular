import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiUrl } from './server-url';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class ModulService {

  constructor(private http: HttpClient) { }

  getPdf() {

    const httpOptions = {
      responseType: ('blob' as 'json'),
    };
    // return this.http.get(uri, { responseType: 'blob' });
    return this.http.get(ApiUrl + 'reports/moduls', { responseType: 'blob' });
  }


}
