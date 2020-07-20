import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { AccountComponent } from './Component/account/account.component';
import { NewAccountComponent } from './Component/new-account/new-account.component';

const routes: Routes = [

  {path:'login', component: LoginComponent},
  {path:'Account', component: AccountComponent},
  {path:'newaccount', component: NewAccountComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
