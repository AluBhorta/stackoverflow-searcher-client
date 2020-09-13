import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ResultListComponent } from './components/result-list/result-list.component';
import { ResultItemComponent } from './components/result-item/result-item.component';
import { HeaderComponent } from './components/layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    ResultListComponent,
    ResultItemComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
