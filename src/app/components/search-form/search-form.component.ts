import { Component, OnInit, Input } from '@angular/core';

import { PageLessQueryParam } from 'src/app/models/QueryParam';
import { StateProviderService } from 'src/app/services/state-provider.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  @Input() q = '';
  @Input() body = '';
  @Input() title = '';
  @Input() url = '';
  @Input() tagged = '';
  @Input() nottagged = '';
  @Input() answers = '';
  @Input() views = '';
  @Input() user = '';
  @Input() accepted = '';
  @Input() closed = '';
  @Input() migrated = '';
  @Input() wiki = '';
  @Input() notice = '';
  @Input() order = '';
  @Input() sort = '';
  @Input() min = '';
  @Input() max = '';
  @Input() fromdate = '';
  @Input() todate = '';

  constructor(private stateProvider: StateProviderService) {}

  ngOnInit(): void {}

  onSubmit = () => {
    const plqp = this.generatePageLessQueryParam();
    this.stateProvider.replaceQueryParam(plqp);
    this.clearForm();
  };

  generatePageLessQueryParam = () => {
    const qp: PageLessQueryParam = {
      q: this.q,
      body: this.body,
      title: this.title,
      url: this.url,
      tagged: this.tagged,
      nottagged: this.nottagged,
      answers: this.answers,
      views: this.views,
      user: this.user,
      accepted: this.accepted,
      closed: this.closed,
      migrated: this.migrated,
      wiki: this.wiki,
      notice: this.notice,
      order: this.order,
      sort: this.sort,
      min: this.min,
      max: this.max,
      fromdate: this.fromdate,
      todate: this.todate,
    };
    return qp;
  };

  clearForm = () => {
    this.q = '';
    this.body = '';
    this.title = '';
    this.url = '';
    this.tagged = '';
    this.nottagged = '';
    this.answers = '';
    this.views = '';
    this.user = '';
    this.accepted = '';
    this.closed = '';
    this.migrated = '';
    this.wiki = '';
    this.notice = '';
    this.order = '';
    this.sort = '';
    this.min = '';
    this.max = '';
    this.fromdate = '';
    this.todate = '';
  };
}
