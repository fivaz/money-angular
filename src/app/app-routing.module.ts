import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AccountsPageComponent} from "./accounts/accounts-page/accounts-page.component";
import {AccountPageComponent} from "./account/account-page/account-page.component";
import {CategoriesPageComponent} from "./categories/categories-page/categories-page.component";
import {LoginComponent} from "./home/login/login.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: AccountsPageComponent
  },
  {
    path: 'account/:id',
    component: AccountPageComponent
  },
  {
    path: 'categories',
    component: CategoriesPageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
