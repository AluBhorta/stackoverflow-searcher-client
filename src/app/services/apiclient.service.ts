import { Injectable } from '@angular/core';
import { QueryParam } from '../models/QueryParam';
import { APISearchResult } from '../models/API';

@Injectable({
  providedIn: 'root',
})
export class APIClientService {
  constructor() {}

  fetchSearchResult = async (qp: QueryParam): Promise<APISearchResult> => {
    // TODO: fetch
    return {
      message: 'Hello API',
      quota_daily_limit: 0,
      quota_minute_limit: 0,
      quota_daily_remain: 0,
      quota_minute_remain: 0,
      questions: [],
      queryParam: qp,
    };
  };
}
