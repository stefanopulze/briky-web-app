import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AiService {

  constructor(private http: HttpClient) { }

  query(query: string): Observable<any> {
    return this.http.post(environment.endpoint + "/ai/query", {
      query: query
    });
  }

}
