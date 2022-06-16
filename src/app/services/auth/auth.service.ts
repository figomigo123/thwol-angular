import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiUrl } from '../server-url';

const serverURL = ApiUrl+'auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(serverURL+ 'signin', {
      username,
      password
    }, httpOptions);
  }

  isAuthenticated() {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': "Basic " + btoa(localStorage.getItem("email") + ":" + localStorage.getItem("password")) }),
      withCredentials: true,
    }
    console.log(this.http.get(serverURL + "session?token=" + localStorage.getItem("token"), httpOptions)
);
    return this.http.get(serverURL + "session?token=" + localStorage.getItem("token"), httpOptions);
  }
  
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(serverURL + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }
}
