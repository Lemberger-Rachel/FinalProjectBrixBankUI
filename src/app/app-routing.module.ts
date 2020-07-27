import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Component/login/login.component';
import { AccountComponent } from './Component/account/account.component';
import { NewAccountComponent } from './Component/new-account/new-account.component';
import { TransactionComponent} from 'src/app/Component/transaction/transaction.component'
import { EmailVerificationComponent } from './Component/email-verification/email-verification.component';
const routes: Routes = [

  {path:'login', component: LoginComponent},
  {path:'Account', component: AccountComponent},
  {path:'newaccount', component: NewAccountComponent},
  {path:'Transaction', component: TransactionComponent},
  {path:'EmailVerification', component: EmailVerificationComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
