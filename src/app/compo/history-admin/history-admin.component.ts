import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { History } from '../../app.component';
import { QuestionService } from '../../question.service';

@Component({
  selector: 'app-history-admin',
  imports: [RouterLink],
  templateUrl: './history-admin.component.html',
  styleUrl: './history-admin.component.css',
})
export class HistoryAdminComponent implements OnInit {
  name: string | null = '';
  rouetr = inject(Router);

  historyList: History[] = [];
    service = inject(QuestionService);
  

  ngOnInit(): void {
    debugger
    this.name = localStorage.getItem('Admin');
    this.getHistoryList()
  }

  onLogout() {
    let isdel = confirm('Are you sure want to logout?');
    if (isdel) {
      localStorage.clear();
      this.rouetr.navigate(['/login']);
    }
  }

  getHistoryList() {
    this.service.getHistory2().subscribe((res) => {
      if (res) {
        this.historyList = res;
      }
    });
  }

  deleteSingle(id: any) {
    let isDel = confirm('Are you sure want to delete?');
    if (isDel) {
      this.service.deleteSingleHistory(id).subscribe((res) => {
        if (res) {
          this.getHistoryList();
        }
      });
    }
  }
}
