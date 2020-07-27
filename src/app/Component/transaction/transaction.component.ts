import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,FormControl } from '@angular/forms';
import { TransactionService } from 'src/app/Services/transaction.service';
import { Router } from '@angular/router';
import {AccountService} from 'src/app/Services/account.service';
import { Transaction } from 'src/app/Models/Transaction‏';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  formGroup: FormGroup;
  titleAlert: string = 'This field is required';
  post: any = '';
  result: any = '';
  amount : number;
  fromAccount :string;
  toAccount :string;
  url:string='http://localhost:53715/Transaction';
  currentUser:any;
  
  constructor(private formBuilder: FormBuilder,private transactionSer:TransactionService
    ,private route:Router,private accountSer: AccountService,) { }

  ngOnInit(): void {
    this.createForm();
   
  }
  createForm() {
    this.formGroup = this.formBuilder.group({
      'toAccount': [null, [Validators.required]],
      'amount': [null, [Validators.required,this.checkAmount]],
     
    });
  }
  checkAmount(control) {
     let enteredAmount = control.value;
    if (enteredAmount>1||enteredAmount<1000000) {
     return {'requirements': true}
    }
    else  {
      return null;
    }
  }
  onSubmit(post){
    var transaction = new Transaction();
    transaction.toAccount=this.toAccount;
    transaction.amount=this.amount;
    transaction.fromAccount=this.currentUser= sessionStorage.getItem("currentUser");

    this.transactionSer.bankTransfer(transaction).subscribe({
      next: success=>{
        if(success===true){
          this.result = 'You have successfully send Transaction';
          this.route.navigate(["./account"]);
        }
        else{
          this.result = 'Something went wrong! please try again';
        }
      },
       error: e=>console.log(e)
    })
  }
  getErrorToAccount() {
    return this.formGroup.get('ToAccount').hasError('required') ? 'Field is required' :'';
  }
  getErrorAmount() {
    return this.formGroup.get('Amount').hasError('required') ? 'Field is required' :'';
  }

}
