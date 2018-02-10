import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login.component';
import {AuthService} from "../service/auth.service";

export const ROUTES: Routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ROUTES)
  ],
  declarations: [LoginComponent],
  providers: [

  ]
})
export class LoginModule {
}
