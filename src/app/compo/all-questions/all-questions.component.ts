import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { QuestionService } from '../../question.service';
import { Question } from '../../app.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-questions',
  imports: [RouterLink, FormsModule],
  templateUrl: './all-questions.component.html',
  styleUrl: './all-questions.component.css',
})
export class AllQuestionsComponent implements OnInit {
  name: string | null = '';
  isEdit = false

  questionService = inject(QuestionService);
  questionList: Question[] = [];
  question: Question = new Question();
  routr = inject(Router)

  ngOnInit(): void {
    this.name = localStorage.getItem('Admin');
    this.getQuestionList()
  }

  getQuestionList(){
    this.questionService.getQuestions().subscribe((res) => {
      if (res) {
        // console.log(res)
        this.questionList = res;
      }
    });
  }

  onDelete(id: any) {
    let isDel = confirm('Are you sure want to delete?');
    if (isDel) {
      this.questionService.deleteQues(id).subscribe((res) => {
        if (res) {
          console.log("user deleted.")
          this.getQuestionList()
        }
      });
    }
  }

  onClose(){
    this.isEdit = false
    this.routr.navigate(['/all-questions'])
  }

  onEdit(id:any){
    this.isEdit = true
    this.questionService.getQuestion(id).subscribe((res)=>{
      if(res){
        this.question = res;
      }
    })
  }

  onEditQuestion(id:any, question:Question){
    this.questionService.editQuestion(id, question).subscribe((res)=>{
      if(res){
        alert("Question edited successfully!")
        this.getQuestionList()
        this.isEdit = false
      }
  })
  }

  onLogout(){
    let isdel = confirm("Are you sure want to logout?")
    if(isdel){
      localStorage.clear()    
      this.routr.navigate(['/login'])
    }
  }
}
