import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/models/Question';

@Component({
  selector: 'app-question-metrics',
  templateUrl: './question-metrics.component.html',
  styleUrls: ['./question-metrics.component.css'],
})
export class QuestionMetricsComponent implements OnInit {
  @Input() question: Question;
  constructor() {}

  ngOnInit(): void {}
}
