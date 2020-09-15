import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ResultListComponent } from './components/result-list/result-list.component';
import { ResultItemComponent } from './components/result-item/result-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import {FormsModule} from '@angular/forms';
import { HomePageComponent } from './components/layout/home-page/home-page.component';
import { QuestionDetailPageComponent } from './components/layout/question-detail-page/question-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    ResultListComponent,
    ResultItemComponent,
    HeaderComponent,
    HomePageComponent,
    QuestionDetailPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
