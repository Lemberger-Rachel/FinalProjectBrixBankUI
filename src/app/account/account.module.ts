import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewAccountComponent} from 'src/app/account/Component/new-account/new-account.component';
import {LoginComponent} from 'src/app/account/Component/login/login.component';
import {AccountComponent} from 'src/app/account/Component/account/account.component';
import {EmailVerificationComponent} from 'src/app/account/Component/email-verification/email-verification.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    NewAccountComponent,
    LoginComponent,
    AccountComponent,    
    NewAccountComponent,
    EmailVerificationComponent
  ],
  imports: [
    RouterModule.forChild([
      {path:'newaccount', component: NewAccountComponent},
      {path:'login', component: LoginComponent},
      {path:'Account', component: AccountComponent},
      {path:'newaccount', component: NewAccountComponent},
      {path:'EmailVerification', component: EmailVerificationComponent},
      {path: '', redirectTo: 'login', pathMatch: 'full'},
    ]),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AccountModule { }
