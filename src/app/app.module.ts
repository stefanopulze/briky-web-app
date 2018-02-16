import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HeaderComponent} from './ui/header/header.component';
import {AuthInterceptor} from "./security/auth.interceptor";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { EuroPipe } from './pipe/euro.pipe';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import {appRoutes} from "./app.routes";
import {AuthStorage} from "./security/auth.storage";
import {AuthService} from "./service/auth.service";
import { ProfileComponent } from './page/profile/profile.component';
import { PillsComponent } from './ui/pills/pills.component';
import {ExpencesService} from "./service/expences.service";
import { DateFilterComponent } from './ui/date-filter/date-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EuroPipe,
    DashboardComponent,
    ProfileComponent,
    PillsComponent,
    DateFilterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    appRoutes
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthStorage,
    AuthService,
    ExpencesService,
    EuroPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
