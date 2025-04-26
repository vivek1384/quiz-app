import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Admin, Question, Quiz } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  http = inject(HttpClient)

  constructor() { }

    userAll(){
      return this.http.get<Admin[]>("http://localhost:3000/user")
    }
    adminAll(){
      return this.http.get<Admin[]>("http://localhost:3000/admin")
    }
  
    questionAll(){
      return this.http.get<Question[]>("http://localhost:3000/questions")
    }

    onDeleteUser(id:any){
      return this.http.delete("http://localhost:3000/user/"+id)
    }
    onDeleteAdmin(id:any){
      return this.http.delete("http://localhost:3000/admin/"+id)
    }
    onAdminEdit1(id:any){
      return this.http.get<Admin>("http://localhost:3000/admin/"+id)
    }
    onUserEdit1(id:any){
      return this.http.get<Admin>("http://localhost:3000/user/"+id)
    }
    onAdminEdit2(id:any, admin:Admin){
      return this.http.put("http://localhost:3000/admin/"+id, admin)
    }
    onUserEdit2(id:any, user:Admin){
      return this.http.put("http://localhost:3000/user/"+id, user)
    }
    addUser(user:Admin){
      return this.http.post("http://localhost:3000/user", user)
    }
    addAdmin(admin:Admin){
      return this.http.post("http://localhost:3000/admin", admin)
    }
    addQuiz(quiz:Quiz){
      return this.http.post("http://localhost:3000/quiz", quiz)
    }
    onQuizEdit1(id:any){
      return this.http.get<Quiz>("http://localhost:3000/quiz/"+id)
    }
    onQuizEdit2(id:any, quiz:Quiz){
      return this.http.put("http://localhost:3000/quiz/"+id, quiz)
    }
    onDeleteQuiz(id:any){
      return this.http.delete("http://localhost:3000/quiz/"+id)
    }
}
