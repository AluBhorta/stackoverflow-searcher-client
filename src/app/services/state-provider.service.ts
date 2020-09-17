import { Injectable } from '@angular/core';
import {
  Question,
  QuestionStream,
  QuestionStreamAction,
} from '../models/Question';
import { PageLessQueryParam, QueryParam } from '../models/QueryParam';
import { APIClientService } from './apiclient.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateProviderService {
  private questions: Question[];
  private queryParam: QueryParam = {
    q: '',
    body: '',
    title: '',
    url: '',
    tagged: '',
    nottagged: '',
    answers: '',
    views: '',
    page: '1',
    pagesize: '30',
    user: '',
    accepted: '',
    closed: '',
    migrated: '',
    wiki: '',
    notice: '',
    order: '',
    sort: '',
    min: '',
    max: '',
    fromdate: '',
    todate: '',
  };
  private hasMorePages = false;
  private questionSubject = new Subject();

  constructor(private apiClient: APIClientService) {}

  getQuestionStream() {
    return this.questionSubject.asObservable();
  }

  replaceQueryParam(plqp: PageLessQueryParam) {
    this.queryParam = {
      ...this.queryParam,
      ...plqp,
    };
    this.fetchResultAndUpdateState('REPLACE');
  }

  loadNextPage() {
    if (this.hasMorePages) {
      this.queryParam = {
        ...this.queryParam,
        page: (+this.queryParam.page + 1).toString(),
      };
      this.fetchResultAndUpdateState('APPEND');
    }
  }

  private fetchResultAndUpdateState(action: QuestionStreamAction) {
    this.apiClient.fetchSearchResult(this.queryParam).then((result) => {
      console.log('result', result)
      this.hasMorePages = result.has_more;
      this.questions = result.questions;

      const qs: QuestionStream = {
        questions: result.questions,
        action: action,
      };
      this.questionSubject.next(qs);
    });
  }
}
