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
  private questions: Question[] = [];
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
      result.questions = result.questions.map((q) => this.decodeQuestion(q));

      switch (action) {
        case 'REPLACE':
          this.questions = result.questions;
          break;
        case 'APPEND':
          this.questions.push(...result.questions);
          break;
        default:
          throw Error('Invalid Action!');
      }

      this.hasMorePages = result.has_more;

      const qs: QuestionStream = {
        questions: result.questions,
        action: action,
      };
      this.questionSubject.next(qs);
    });
  }

  getQuestion(id: string | number): Question | undefined {
    return this.questions.find((q) => q.question_id === +id);
  }

  decodeQuestion(q: Question): Question {
    return {
      ...q,
      title: this._decodeString(q.title),
      last_activity_date: this._getDateInUTC(q.last_activity_date),
      creation_date: this._getDateInUTC(q.creation_date),
    };
  }

  _decodeString(str: string) {
    var txt = document.createElement('textarea');
    txt.innerHTML = str;
    return txt.value;
  }

  _getDateInUTC(timestamp: string | number) {
    return new Date(+timestamp * 1000).toUTCString();
  }
}
