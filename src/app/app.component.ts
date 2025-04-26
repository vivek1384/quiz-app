import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'quiz';
}

export class Admin{
  name: string;
  surname: string;
  password: string;
  id: any;

  constructor(){
    this.name = "",
    this.surname = "",
    this.password = ""
  }
}

export class Question{
  question : string;
  optionA : string;
  optionB : string;
  optionC : string;
  optionD : string;
  answer : string;
  id:any;
  message: string;
  givenAnswer: string;
  quizId: number;
  quizName: string;


  constructor(){
    this.question = "",
    this.optionA = "",
    this.optionB = "",
    this.optionC = "",
    this.optionD = "",
    this.answer = "",
    this.id = undefined,
    this.message = "";
    this.givenAnswer = "";
    this.quizId = 0;
    this.quizName = ""
  }
}

export class History{
  id: any;
  score : number;
  quizId: any
  quizName: string
  userId:any
  userName: string | null

  constructor(){
    this.id = undefined;
    this.score = 0;
    this.quizId = undefined;
    this.quizName = "";
    this.userId = undefined;
    this.userName = ""
  }
}

export class Quiz{
  id: any;
  name: string;
  constructor(){
    this.id = undefined
    this.name = ""
  }
}
