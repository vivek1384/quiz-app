import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Admin, Question } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  http = inject(HttpClient)

  constructor() { }

  adminLogin(name: string, password: string){
    return this.http.get<Admin[]>(`http://localhost:3000/admin?name=${name}&password=${password}`)
  }
  userLogin(name:string, password:string){
    return this.http.get<Admin[]>(`http://localhost:3000/user?name=${name}&password=${password}`)
  }

  userAll(){
    return this.http.get<Admin[]>("http://localhost:3000/user")
  }
  adminAll(){
    return this.http.get<Admin[]>("http://localhost:3000/admin")
  }

  questionAll(){
    return this.http.get<Question[]>("http://localhost:3000/questions")
  }
}
