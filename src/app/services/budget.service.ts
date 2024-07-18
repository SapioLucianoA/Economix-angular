import { Injectable, OnInit } from '@angular/core';
import { TransactionService } from './transaction.service';
import { Transaction } from '../models/transaction.model';


@Injectable({
  providedIn: 'root'
})
export class BudgetService implements OnInit {

  constructor(private transactionService: TransactionService) { }
  budget:number;
  expensesAmount:number;
  incomesAmount:number;
  expenses:Transaction[];
  incomes:Transaction[];


  ngOnInit(): void {
    let budgetString = localStorage.getItem("TotalBudget");
    if(budgetString){
      this.setBudget;
    }
  }
  


  setBudget(){
    let budgetString = localStorage.getItem("TotalBudget");
    let number = parseFloat(budgetString);
    if(isNaN(number)){
      this.budget = 0;
      return this.budget;
    }
    else{
      this.budget = number
      return this.budget;
    }
  }
    saveBudget(amount:number ){
      if(this.budget == null || this.budget == 0){
        this.budget = amount;
        localStorage.setItem("TotalBudget", JSON.stringify(this.budget))
        return this.budget
      }else
      {
  
      this.budget +=  amount;
  
      localStorage.setItem("TotalBudget", JSON.stringify(this.budget))
      return this.budget
    }
    }
  
  

  getBudget(){
    if(this.budget == null ){
      return 0
    } else{
      return this.budget;
    }
  }

  getMonthBudget(){
    let suma = 0;
    let AllTransactions:Transaction[] = [];
    AllTransactions = this.transactionService.getTransactions();
    if(AllTransactions.length == 0){
      return suma
    }
    else{
      for(let transaction of AllTransactions){
        suma += transaction.amount;
      }
      return suma;
    }
  }
  getExpensesAmount() {
    let suma = 0;
    const expenses = this.transactionService.getExpenses();
    if (expenses.length > 0) {
        for (const exp of expenses) {
            suma += exp.amount;
        }
        return suma;      
    }
    else{
      return suma;
    }
    

  }
  getIncomesAmount() {
    let suma = 0;
    const incomes = this.transactionService.getIncomes();
    if (incomes.length > 0) {
        for (const income of incomes) {
            suma += income.amount;
        }
        return suma;      
      }
      else{
        return suma;
      }
  }
}
