import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard-page/dashboard/dashboard.component';
import { UploadContentComponent } from './pages/upload-content/upload-content.component';
import { McqQuestionsComponent } from './pages/mcq-questions/mcq-questions.component';
import { ScoreCardComponent } from './pages/score-card/score-card.component';
import { MyrequestComponent } from './pages/myrequest/myrequest/myrequest.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'dashboard-page' },
  { path: 'dashboard-page', component: MyrequestComponent },
  { path: '', component: MyrequestComponent },
  { path: 'upload-content', component: UploadContentComponent },
  { path: 'mcq-question', component: McqQuestionsComponent },
  { path: 'dashboard-page/mcq-question', component: McqQuestionsComponent },
  { path: 'score-card', component: ScoreCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
