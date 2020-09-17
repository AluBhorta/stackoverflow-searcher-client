import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/models/Question';
import { ShallowUser } from 'src/app/models/User';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent implements OnInit {
  @Input() question: Question;
  constructor() {}

  ngOnInit(): void {}
}
