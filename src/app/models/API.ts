import { Question } from './Question';
import { QueryParam } from './QueryParam';

export type APISearchRequest = {
  queryParam: QueryParam;
};

export type APISearchResult = {
  quota_daily_remain: number;
  quota_minute_remain: number;
  questions: Question[];
  count: number;
  has_more: boolean;
  is_new: boolean;
  message?: string;
};
