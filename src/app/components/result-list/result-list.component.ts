import { Component, OnInit } from '@angular/core';
import { StateProviderService } from 'src/app/services/state-provider.service';
import { Question, QuestionStream } from 'src/app/models/Question';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.css'],
})
export class ResultListComponent implements OnInit {
  questions: Question[] = [];

  constructor(private stateProvider: StateProviderService) {}

  ngOnInit(): void {
    this.stateProvider
      .getQuestionStream()
      .subscribe((questionStream: QuestionStream) => {
        switch (questionStream.action) {
          case 'APPEND':
            this.questions.push(...questionStream.questions);
            break;
          case 'REPLACE':
            this.questions = questionStream.questions;
            break;
          default:
            throw Error('Invalid Action provided');
        }
      });
  }

  loadNextPage(){
    this.stateProvider.loadNextPage()
  }
}
