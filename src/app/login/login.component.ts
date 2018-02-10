import {Component, ElementRef, OnInit} from '@angular/core';
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading = false;
  error = false;

  constructor(private service: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  tryLogin(email: string, password: any) {
    this.loading = true;

    this.service.login(email, password).subscribe(response => {
      this.router.navigate(['dashboard']);
    }, error => {
      this.loading = false;
      this.error = true;
    });
  }

}
