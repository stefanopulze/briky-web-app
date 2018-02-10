import {Component, OnInit} from '@angular/core';
import {AuthStorage} from "./security/auth.storage";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loggedIn = false;

  constructor(private storage: AuthStorage, private router: Router) {

  }

  ngOnInit(): void {
    if(!this.storage.isLogged()) {
      this.loggedIn = false;
      this.router.navigate(['login']);
    } else {
      this.loggedIn = true;
    }
  }


}
