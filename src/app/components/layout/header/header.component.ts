import { Component, OnInit } from '@angular/core';
import { QuestionStream } from 'src/app/models/Question';
import { StateProviderService } from 'src/app/services/state-provider.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'stackoverflow searcher';

  dailyQuota: number;
  minuteQuota: number;

  constructor(private stateProvider: StateProviderService) {}

  ngOnInit(): void {
    const { dailyQuota, minuteQuota } = this.stateProvider.getQuota();

    this.dailyQuota = dailyQuota;
    this.minuteQuota = minuteQuota;

    this.stateProvider
      .getQuestionStream()
      .subscribe((qStream: QuestionStream) => {
        const { dailyQuota, minuteQuota } = qStream;
        this.dailyQuota = dailyQuota;
        this.minuteQuota = minuteQuota;
      });
  }
}
