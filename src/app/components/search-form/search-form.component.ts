import { Component, OnInit, Input } from '@angular/core';
import { APIClientService } from 'src/app/services/apiclient.service';

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
  @Input() page = '';
  @Input() pagesize = '';
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

  constructor(private apiClient: APIClientService) {}

  ngOnInit(): void {}

  generateQueryParam = () => {};
}
