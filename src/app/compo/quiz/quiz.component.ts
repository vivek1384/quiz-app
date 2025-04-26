import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { QuestionService } from '../../question.service';
import { History, Question, Quiz } from '../../app.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  imports: [RouterLink, FormsModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css',
})
export class QuizComponent implements OnInit {
  name: string | null = '';

  rouetr = inject(Router);

  questionService = inject(QuestionService);
  questionList: Question[] = [];
  question: Question = new Question();
  history: History = new History();
  givenAnswer: string = '';
  isQuestionListOpen = false;

  quizNameForHeading: string = '';

  quizNameList: Quiz[] = [];

  ngOnInit(): void {
    this.name = localStorage.getItem('User');
    this.getQuiz();
    this.questionService.getQuestions().subscribe((res) => {
      if (res) {
        // console.log(res)
        this.questionList = res;
        this.questionList.forEach((element) => {
          // element.answer = '';
        });
      }
    });
  }

  getQuiz() {
    this.questionService.getQuizName().subscribe((res) => {
      if (res) {
        this.quizNameList = res;
      }
    });
  }

  getQuestionListByQuiz(id: any) {
    this.isQuestionListOpen = true;
    this.questionService.getQuestionByQuiz(id).subscribe((res) => {
      if (res) {
        this.questionList = res;
        debugger;
        this.quizNameForHeading = this.quizNameList[id - 1].name;
      }
    });
  }

  onLogout() {
    let isdel = confirm('Are you sure want to logout?');
    if (isdel) {
      localStorage.clear();
      this.rouetr.navigate(['/login']);
    }
  }
  resultCounter: number = 0;
  counter: number = 0;

  onAnsSubmit(id: any, answer: string) {
    this.questionService.getAnswer(id, answer).subscribe((res) => {
      if (res && res.length == 1) {
        alert('Answer is correct!');
        this.questionList[this.counter].message = 'Right Answer submitted!';
        this.resultCounter++;
        if (this.counter === 4) {
          // debugger;
          this.history.score = this.resultCounter;
          // debugger;
          this.history.quizId = this.questionList[0].quizId;
          this.history.userId = localStorage.getItem('UserId')
          this.history.userName = localStorage.getItem('User')
          this.history.quizName = this.quizNameList[this.history.quizId - 1].name;
          this.questionService.addToHistory(this.history).subscribe((res) => {
            if (res) {
              this.rouetr.navigate(['/history']);
            }
          });
        }
        if (this.counter < 5) {
          this.counter++;
        }
      } else {
        alert(`Answer is incorrect!`);
        debugger;
        this.questionList[
          this.counter
        ].message = `Wrong Answer submitted, correct answer is: ${
          this.questionList[this.counter].answer
        }`;
        if (this.counter === 4) {
          debugger;
          this.history.score = this.resultCounter;
          debugger;
          this.history.quizId = this.questionList[0].quizId;
          debugger;
          this.history.quizName =
            this.quizNameList[this.history.quizId - 1].name;
          this.questionService.addToHistory(this.history).subscribe((res) => {
            if (res) {
              this.rouetr.navigate(['/history']);
            }
          });
        }
        if (this.counter < 5) {
          this.counter++;
        }
      }
    });
  }
  onCounter1() {
    this.counter = 1 - 1;
  }
  onCounter2() {
    this.counter = 2 - 1;
  }
  onCounter3() {
    this.counter = 3 - 1;
  }
  onCounter4() {
    this.counter = 4 - 1;
  }
  onCounter5() {
    this.counter = 5 - 1;
  }
  onCounter6() {
    this.counter = 6 - 1;
  }
  onCounter7() {
    this.counter = 7 - 1;
  }
  onCounter8() {
    this.counter = 8 - 1;
  }
  onCounter9() {
    this.counter = 9 - 1;
  }
  onCounter10() {
    this.counter = 10 - 1;
  }
  onCounter11() {
    this.counter = 11 - 1;
  }
  onCounter12() {
    this.counter = 12 - 1;
  }
  onCounter13() {
    this.counter = 13 - 1;
  }
  onCounter14() {
    this.counter = 14 - 1;
  }
  onCounter15() {
    this.counter = 15 - 1;
  }
  onCounter16() {
    this.counter = 16 - 1;
  }
  onCounter17() {
    this.counter = 17 - 1;
  }
  onCounter18() {
    this.counter = 18 - 1;
  }
  onCounter19() {
    this.counter = 19 - 1;
  }
  onCounter20() {
    this.counter = 20 - 1;
  }
}
