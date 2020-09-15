import { Injectable } from '@angular/core';
import { QueryParam } from '../models/QueryParam';
import { APISearchResult } from '../models/API';

@Injectable({
  providedIn: 'root',
})
export class APIClientService {
  private API_URL = 'http://localhost:8000/search/';

  constructor() {}

  fetchSearchResult = async (qp: QueryParam): Promise<APISearchResult> => {
    const response = await fetch(`${this.API_URL}?${new URLSearchParams(qp)}`)
      .then((res) => res.json())
      .catch((err) => console.error(err));

    return {
      quota_daily_limit: response?.quota_daily_limit || 0,
      quota_minute_limit: response?.quota_minute_limit || 0,
      quota_daily_remain: response?.quota_daily_remain || 0,
      quota_minute_remain: response?.quota_minute_remain || 0,
      questions: response?.results || [],
      queryParam: qp,
    };
  };
}
