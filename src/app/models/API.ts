import { Question } from './Question';
import { QueryParam } from './QueryParam';

export type APISearchRequest = {
  queryParam: QueryParam;
};

export type APISearchResult = {
  message: string;
  quota_daily_limit: number;
  quota_minute_limit: number;
  quota_daily_remain: number;
  quota_minute_remain: number;
  questions: Question[];
  queryParam: QueryParam;
};