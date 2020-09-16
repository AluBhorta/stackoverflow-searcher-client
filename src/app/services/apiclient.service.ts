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
    return await fetch(`${this.API_URL}?${new URLSearchParams(qp)}`)
      .then((res) => res.json())
      .catch((err) => console.error(err));
  };
}
