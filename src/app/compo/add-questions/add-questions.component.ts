import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Question, Quiz } from '../../app.component';
import { QuestionService } from '../../question.service';

@Component({
  selector: 'app-add-questions',
  imports: [RouterLink, FormsModule],
  templateUrl: './add-questions.component.html',
  styleUrl: './add-questions.component.css'
})
export class AddQuestionsComponent implements OnInit {

  name : string | null = ""
  question : Question = new Question()
  service = inject(QuestionService)
  rouetr = inject(Router)
  quizList : Quiz[] = []

  ngOnInit(): void {
      this.name = localStorage.getItem('Admin')
      this.getQuizList()
  }

  addQuestiion(question:Question){
    this.service.addQuestion(question).subscribe((res)=>{
      if(res){
        debugger
        console.log(question)
        alert("Question Added Successfully!")
        this.rouetr.navigate(['/all-questions'])
      }
    })
  }

  getQuizList(){
    this.service.getQuizName().subscribe((res)=>{
      if(res){
        this.quizList = res
      }
    })
  }

  onLogout(){
    let isdel = confirm("Are you sure want to logout?")
    if(isdel){
      localStorage.clear()    
      this.rouetr.navigate(['/login'])
    }
  }

}
