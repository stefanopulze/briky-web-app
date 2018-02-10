import {Injectable} from "@angular/core";
import {LoginResponse} from "../model/login.response";
import {User} from "../model/user.model";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";


export const TOKEN_STORAGE_KEY = "briky_web_token_id";
const USER_STORAGE_KEY = "briky_web_user";

@Injectable()
export class AuthStorage {

  user: Subject<User>;

  constructor() {
    this.user = new Subject<User>();
    this.user.next(this.readUser());
  }

  isLogged() {
    return localStorage.getItem(TOKEN_STORAGE_KEY) !== null;
  }

  update(response: LoginResponse) {
    localStorage.setItem(TOKEN_STORAGE_KEY, response.token);
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(response.user));

    this.user.next(response.user);
  }

  readUser(): User {
    return JSON.parse(localStorage.getItem(USER_STORAGE_KEY));
  }

  getUser(): Observable<User> {
    return this.user;
  }

}
