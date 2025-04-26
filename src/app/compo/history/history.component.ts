import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { History } from '../../app.component';
import { QuestionService } from '../../question.service';

@Component({
  selector: 'app-history',
  imports: [RouterLink],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent implements OnInit {
  name: string | null = '';
  userId : any
  historyList: History[] = [];
  service = inject(QuestionService);

  rouetr = inject(Router);

  ngOnInit(): void {
    this.name = localStorage.getItem('User');
    this.userId = localStorage.getItem('UserId');
    this.getHistoryList(this.userId);
  }
  getHistoryList(id:any) {
    this.service.getHistory(id).subscribe((res) => {
      if (res) {
        this.historyList = res;
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
  deleteSingle(id: any) {
    let isDel = confirm('Are you sure want to delete?');
    if (isDel) {
      this.service.deleteSingleHistory(id).subscribe((res) => {
        if (res) {
          this.getHistoryList(this.userId);
        }
      });
    }
  }
  deleteAll() {
    let isDel = confirm('Are you sure want to delete?');
    if (isDel) {
      this.historyList.forEach((element) => {
        let id = element.id;
        this.service.deleteSingleHistory(id).subscribe((res) => {
          if (res) {
            this.getHistoryList(this.userId);
          }
        });
      });
    }
  }
}
