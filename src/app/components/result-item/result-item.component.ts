import { Component, OnInit, Input } from '@angular/core';
import { Question } from 'src/app/models/Question';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css'],
})
export class ResultItemComponent implements OnInit {
  @Input() question: Question;

  constructor() {}

  ngOnInit(): void {}
}
