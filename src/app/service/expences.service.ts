import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {ExpenseValue} from "../model/expense.model";
import {environment} from "../../environments/environment";
import {Filter} from "../ui/date-filter/date-filter.model";

@Injectable()
export class ExpencesService {

  constructor(private http: HttpClient) { }

  values(filter: Filter): Observable<ExpenseValue[]> {
    return this.http.post<ExpenseValue[]>(environment.endpoint + "/expenses/value", filter);
  }
}
