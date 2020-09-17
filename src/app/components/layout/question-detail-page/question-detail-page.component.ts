import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/models/Question';
import { StateProviderService } from 'src/app/services/state-provider.service';

@Component({
  selector: 'app-question-detail-page',
  templateUrl: './question-detail-page.component.html',
  styleUrls: ['./question-detail-page.component.css'],
})
export class QuestionDetailPageComponent implements OnInit {
  id: string = '';
  question: Question;

  constructor(
    private route: ActivatedRoute,
    private stateProvider: StateProviderService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.id = params['id']));

    this.question = this.stateProvider.getQuestion(this.id);
  }
}
