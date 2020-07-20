import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NewAccountComponent} from 'src/app/Component/new-account/new-account.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    NewAccountComponent
  ],
  imports: [
    RouterModule.forChild([
      {path:'newaccount', component: NewAccountComponent},
    ]),
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AccountModule { }
