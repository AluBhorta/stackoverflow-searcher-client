import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/layout/home-page/home-page.component';
import { QuestionDetailPageComponent } from './components/layout/question-detail-page/question-detail-page.component';

const routes: Routes = [
  { path: 'question/:id', component: QuestionDetailPageComponent },
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
