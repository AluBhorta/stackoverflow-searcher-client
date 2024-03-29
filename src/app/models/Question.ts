import { ShallowUser } from './User';

export type Question = {
  question_id: number;
  is_answered: boolean;
  view_count: number;
  answer_count: number;
  score: number;
  last_activity_date: number | string;
  creation_date: number | string;
  content_license: string;
  title: string;
  link: string;
  tags: string[];
  owner: ShallowUser;
};

export type QuestionStreamAction = 'REPLACE' | 'APPEND';

export type QuestionStream = {
  questions: Question[];
  action: QuestionStreamAction;
  hasMorePages: boolean;
  dailyQuota: number;
  minuteQuota: number;
};
