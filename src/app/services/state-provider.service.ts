import { Injectable } from '@angular/core';
import {
  Question,
  QuestionStream,
  QuestionStreamAction,
} from '../models/Question';
import { PageLessQueryParam, QueryParam } from '../models/QueryParam';
import { APIClientService } from './apiclient.service';
import { Subject } from 'rxjs';
import { title } from 'process';

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
  private dailyQuota: number;
  private minuteQuota: number;

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

  async loadNextPage() {
    if (this.hasMorePages) {
      this.queryParam = {
        ...this.queryParam,
        page: (+this.queryParam.page + 1).toString(),
      };
      await this.fetchResultAndUpdateState('APPEND');
    }
  }

  private async fetchResultAndUpdateState(action: QuestionStreamAction) {
    await this.apiClient.fetchSearchResult(this.queryParam).then((result) => {
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
      this.dailyQuota = result.quota_daily_remain;
      this.minuteQuota = result.quota_minute_remain;

      const qs: QuestionStream = {
        questions: result.questions,
        action: action,
        hasMorePages: result.has_more,
        dailyQuota: result.quota_daily_remain,
        minuteQuota: result.quota_minute_remain,
      };
      this.questionSubject.next(qs);
    });
  }

  getQuestions(): Question[] {
    return this.questions;
  }

  getHasMore() {
    return this.hasMorePages;
  }

  getQuestion(id: string | number): Question | undefined {
    return this.questions.find((q) => q.question_id === +id);
  }

  decodeQuestion(q: Question): Question {
    return {
      ...q,
      owner: {
        ...q.owner,
        display_name: this._decodeString(q.owner.display_name),
      },
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

  getQuota() {
    return {
      dailyQuota: this.dailyQuota,
      minuteQuota: this.minuteQuota,
    };
  }
}
