import { Component, OnInit } from '@angular/core';
import{Account} from 'src/app/Models/Account';
import {AccountService} from 'src/app/Services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  account: Account= new Account();
  constructor(private accountSer: AccountService, private route:Router) { }

  ngOnInit(): void {
    this.accountSer.getAccount(sessionStorage.getItem("currentUser")).subscribe({
      next: account=>{
        this.account=account;
        console.log(account);
      },
      error: err=>{
        console.log(err);
      }
    })
  }

  BankTransfer(){
   
    this.route.navigate(["./Transaction"]);
  }

}
