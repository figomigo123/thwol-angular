import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { ApiUrl } from './server-url';
const serverURL = ApiUrl + 'users/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

 

  save(user: User) {
    return this.http.post(serverURL, user, httpOptions);
  }

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    console.log(serverURL);
    return this.http.get(serverURL, httpOptions);
  }


}
