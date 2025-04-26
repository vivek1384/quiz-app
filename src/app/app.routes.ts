import { Routes } from '@angular/router';
import { LoginComponent } from './compo/login/login.component';
import { HomeComponent } from './compo/home/home.component';
import { QuizComponent } from './compo/quiz/quiz.component';
import { AllQuestionsComponent } from './compo/all-questions/all-questions.component';
import { AddQuestionsComponent } from './compo/add-questions/add-questions.component';
import { HistoryComponent } from './compo/history/history.component';
import { HistoryAdminComponent } from './compo/history-admin/history-admin.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent
    }
    ,
    {
        path: 'quiz',
        component: QuizComponent
    }
    ,
    {
        path: 'all-questions',
        component: AllQuestionsComponent
    }
    ,
    {
        path: 'add-questions',
        component: AddQuestionsComponent
    }
    ,
    {
        path: 'history',
        component: HistoryComponent
    },
    {
        path: 'history-admin',
        component: HistoryAdminComponent
    }
];
