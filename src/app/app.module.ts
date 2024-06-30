import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard-page/dashboard/dashboard.component';
import { MyrequestComponent } from './pages/myrequest/myrequest/myrequest.component';
import { UploadContentComponent } from './pages/upload-content/upload-content.component';
import { ScoreCardComponent } from './pages/score-card/score-card.component';
import { McqQuestionsComponent } from './pages/mcq-questions/mcq-questions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import { LoadingComponent } from './pages/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    MyrequestComponent,
    UploadContentComponent,
    ScoreCardComponent,
    McqQuestionsComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
