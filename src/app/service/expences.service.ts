import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Expense, ExpenseValue} from "../model/expense.model";
import {environment} from "../../environments/environment";
import {Filter} from "../ui/date-filter/date-filter.model";

@Injectable()
export class ExpencesService {

  constructor(private http: HttpClient) { }

  values(filter: Filter): Observable<ExpenseValue[]> {
    return this.http.post<ExpenseValue[]>(environment.endpoint + "/expenses/value", filter);
  }

  find(filter: Filter): Observable<Expense[]> {
    let params = new HttpParams();

    params = params.append("size", "" + filter.size);

    console.log(filter.size, filter, params);
    return this.http.get<Expense[]>(environment.endpoint + "/expenses", {
      params: params
    });
  }

}
