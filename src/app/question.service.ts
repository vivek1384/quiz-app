import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { History, Question, Quiz } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  http = inject(HttpClient);

  getQuestions() {
    return this.http.get<Question[]>('http://localhost:3000/questions');
  }

  getAnswer(id: any, answer: string) {
    return this.http.get<Question[]>(
      `http://localhost:3000/questions?id=${id}&answer=${answer}`
    );
  }

  deleteQues(id: any) {
    return this.http.delete(`http://localhost:3000/questions/` + id);
  }

  addQuestion(question: Question) {
    return this.http.post('http://localhost:3000/questions', question);
  }

  getQuestion(id: any) {
    return this.http.get<Question>(`http://localhost:3000/questions/` + id);
  }

  editQuestion(id: any, question: Question) {
    return this.http.put(`http://localhost:3000/questions/` + id, question);
  }

  addToHistory(obg: History) {
    return this.http.post('http://localhost:3000/history', obg);
  }

  getHistory(id: any) {
    return this.http.get<History[]>(
      'http://localhost:3000/history?userId=' + id
    );
  }
  getHistory2() {
    return this.http.get<History[]>('http://localhost:3000/history');
  }

  getQuizName() {
    return this.http.get<Quiz[]>('http://localhost:3000/quiz');
  }

  getQuestionByQuiz(id: any) {
    return this.http.get<Question[]>(
      `http://localhost:3000/questions?quizId=` + id
    );
  }
  deleteSingleHistory(id: any) {
    return this.http.delete('http://localhost:3000/history/' + id);
  }

  deleteAllHistory() {
    return this.http.delete('http://localhost:3000/history  ');
  }

  constructor() {}
}
