import { Component, OnInit } from '@angular/core';
import {AuthStorage} from "../../security/auth.storage";
import {User} from "../../model/user.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User = new User();

  links = [];


  constructor(private storage: AuthStorage) {
    storage.getUser().subscribe(this.updateUser.bind(this));
  }

  ngOnInit() {
    this.user = this.storage.readUser();

    this.links = [
      {name: 'Dashhoard', link:'dashboard'},
      {name: 'Profile', link:'profile'}
    ]
  }

  updateUser(user: User) {
    this.user = user;
  }
}
