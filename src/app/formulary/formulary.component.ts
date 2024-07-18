import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TransactionService } from '../services/transaction.service';
import { BudgetService } from '../services/budget.service';
import { Transaction } from '../models/transaction.model';

@Component({
  selector: 'app-formulary',
  standalone: true,
  imports: [ CommonModule,
    FormsModule],
  templateUrl: './formulary.component.html',
  styleUrl: './formulary.component.css'
})
export class FormularyComponent {
  constructor(private transactionService: TransactionService, private budgetService: BudgetService){}
  description:string;
  amount:number;
  id:string;
  transactionNEW: Transaction;
  ArrayTransaction: Transaction[];

  allTo0(){
    this.description = "";
    this.amount = null;
    this.id = "";
  }
  newTransaction(){
    if(this.amount == 0 || this.amount == null || this.description == null){
      alert("The amoutn can`t be 0 or null, the description can`t be null")
      return
    }
    else if(this.description.length > 18){
      alert("Please try to use less than 18 characthers in the description")
    }
    else
    {
      do{
      this.id = this.transactionService.generateRandomMixedId(10);
    }while(this.transactionService.transactions.some(transaction => transaction.id === this.id));

    this.transactionNEW = new Transaction(this.description,this.amount, this.id, new Date());
    
  this.transactionService.transactions.push(this.transactionNEW);

  this.ArrayTransaction = this.transactionService.transactions;

    this.budgetService.saveBudget(this.amount);

    this.transactionService.saveTransaction(this.ArrayTransaction);

    this.allTo0();

  }
  }

}
