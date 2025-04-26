import { Component, inject, isDevMode, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Admin, Question, Quiz } from '../../app.component';
import { HomeService } from '../../home.service';
import { FormsModule } from '@angular/forms';
import { QuestionService } from '../../question.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterOutlet, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  naBar: string = '';
  name: string | null = '';
  isEdit = false;
  isEditUser = false;
  isEditQuiz = false
  quizList: Quiz[] = [];

  addUser = false;
  addAdmin = false;
  addQuiz = false

  rouetr = inject(Router);
  service = inject(HomeService);
  questionService = inject(QuestionService);

  user: Admin = new Admin();
  admin: Admin = new Admin();
  quiz: Quiz = new Quiz();
  userList: Admin[] = [];
  adminList: Admin[] = [];
  questionList: Question[] = [];

  ngOnInit() {
    if (localStorage.getItem('Admin')) {
      this.naBar = 'Admin';
      this.name = localStorage.getItem('Admin');
    } else if (localStorage.getItem('User')) {
      this.naBar = 'User';
      this.name = localStorage.getItem('User');
    }
    // console.log(this.naBar)
    this.getAllUsers();
    this.getAllAdmin();
    this.getAllQuestion();
    this.getQuizList()
  }
  onLogout() {
    let isdel = confirm('Are you sure want to logout?');
    if (isdel) {
      localStorage.clear();
      this.rouetr.navigate(['/login']);
    }
  }

  getAllUsers() {
    this.service.userAll().subscribe((res) => {
      this.userList = res;
    });
  }
  getAllAdmin() {
    this.service.adminAll().subscribe((res) => {
      this.adminList = res;
    });
  }

  getAllQuestion() {
    debugger
    this.service.questionAll().subscribe((res) => {
      this.questionList = res;
      debugger
    });
  }

  getQuizList() {
    this.questionService.getQuizName().subscribe((res) => {
      if (res) {
        this.quizList = res;
        console.log(this.quizList);
      }
    });
  }

  onUserDelete(id: any) {
    let isDel = confirm('Are you sure want to delete?');
    if (isDel) {
      this.service.onDeleteUser(id).subscribe((res) => {
        if (res) {
          this.getAllUsers();
        }
      });
    }
  }
  onAdminDelete(id: any) {
    let isDel = confirm('Are you sure want to delete?');
    if (isDel) {
      this.service.onDeleteAdmin(id).subscribe((res) => {
        if (res) {
          this.getAllAdmin();
        }
      });
    }
  }

  onEditUser1(id: any) {
    this.service.onUserEdit1(id).subscribe((res) => {
      if (res) {
        this.user = res;
      }
    });
    this.isEditUser = true;
  }

  onEditUser2(id: any, user: Admin) {
    this.service.onUserEdit2(id, user).subscribe((res) => {
      if (res) {
        alert('User edited successfully!');
        this.getAllUsers();
        this.isEditUser = false;
      }
    });
  }
  onEditAdmin1(id: any) {
    this.service.onAdminEdit1(id).subscribe((res) => {
      if (res) {
        this.admin = res;
      }
    });
    this.isEdit = true;
  }

  onEditAdmin2(id: any, admin: Admin) {
    this.service.onAdminEdit2(id, admin).subscribe((res) => {
      if (res) {
        alert('Admin edited successfully!');
        this.getAllAdmin();
        this.isEdit = false;
      }
    });
  }
  onClose() {
    this.isEdit = false;
    this.isEditUser = false;
    this.isEditQuiz = false;
  }

  onAddUser1() {
    this.isEditUser = true;
    this.addUser = true;
  }

  onAddUser2(user: Admin) {
    this.service.addUser(user).subscribe((res) => {
      if (res) {
        alert('User added successfully!');
        this.getAllUsers();
        this.isEditUser = false;
        this.addUser = false;
      }
    });
  }

  onAddAdmin2(admin: Admin) {
    this.service.addAdmin(admin).subscribe((res) => {
      if (res) {
        alert('Admin added successfully!');
        this.getAllAdmin();
        this.isEdit = false;
        this.addAdmin = false;
      }
    });
  }

  onAddAdmin1() {
    this.isEdit = true;
    this.addAdmin = true;
  }

  onAddQuiz(){
    this.isEditQuiz = true;
    this.addQuiz = true
  }
  onAddQuiz2(quiz:Quiz){
    this.service.addQuiz(quiz).subscribe((res)=>{
      if(res){
        alert('Quiz added successfully!');
        this.getQuizList();
        this.isEditQuiz = false;
        this.addQuiz = false;
      }
    })
  }

  onEditQuiz1(id:any){
    this.service.onQuizEdit1(id).subscribe((res) => {
      if (res) {
        this.quiz = res;
      }
    });
    this.isEditQuiz = true;
    this.addQuiz = false;
  }
  onEditQuiz2(id:any, quiz:Quiz){
    this.service.onQuizEdit2(id, quiz).subscribe((res) => {
      if (res) {
        alert('Quiz edited successfully!');
        this.getQuizList();
        this.isEditQuiz = false;
      }
    });
  }
  onQuizDelete(id: any) {
    let isDel = confirm('Are you sure want to delete?');
    if (isDel) {
      this.service.onDeleteQuiz(id).subscribe((res) => {
        if (res) {
          this.getQuizList();
        }
      });
    }
  }

}
