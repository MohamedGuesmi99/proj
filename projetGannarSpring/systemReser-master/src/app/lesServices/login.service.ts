import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isconnected=false;
  constructor(private http:HttpClient) { }
  getLoginAdmin(){
    return this.http.get<any>('http://localhost:8085/admins');
 }
}
