import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question-detail-page',
  templateUrl: './question-detail-page.component.html',
  styleUrls: ['./question-detail-page.component.css'],
})
export class QuestionDetailPageComponent implements OnInit {
  id: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => (this.id = params['id']));
  }
}
