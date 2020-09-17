import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionMetricsComponent } from './question-metrics.component';

describe('QuestionMetricsComponent', () => {
  let component: QuestionMetricsComponent;
  let fixture: ComponentFixture<QuestionMetricsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionMetricsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
