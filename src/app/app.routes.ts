import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./page/dashboard/dashboard.component";
import {ProfileComponent} from "./page/profile/profile.component";
import {AnalyticsComponent} from "./page/analytics/analytics.component";
import {NewExpenseComponent} from "./page/new-expense/new-expense.component";

const routes: Routes = [
  {path: '', redirectTo:'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'analytics', component: AnalyticsComponent},
  {path: 'expense/new', component: NewExpenseComponent},
  {path: 'login', loadChildren: './login/login.module#LoginModule'}
];

export const appRoutes = RouterModule.forRoot(routes, {useHash: true});
