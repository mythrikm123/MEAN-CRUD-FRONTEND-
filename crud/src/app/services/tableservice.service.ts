import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class TableserviceService {
  signupData(res: { username: string; email: string; password: string; }) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient,private router: Router) { }
  //Register the user
  postData(data:any){
    return this.http.post('http://localhost:3000/register',data)
  }
  //Login the user
  loginData(res1:any){
    return this.http.post('http://localhost:3000/login',res1)
  }
  //Get the users
  getUsers() {
   return this.http.get('http://localhost:3000/users')
  }
  //Delete the user
  deleteUsers(id: string): Observable<any> {
    const url = `http://localhost:3000/users/${id}`;
    return this.http.delete(url);
  }
 //Edit and update the user
  updateUser(id: string, user: any): Observable<any> {
    const url = `http://localhost:3000/users/${id}`;
    return this.http.put(url, user);
  }
  //Logout the user
  logout() {
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
