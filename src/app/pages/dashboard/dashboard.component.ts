import { Component, input, OnInit } from '@angular/core';
import { ExpensesComponent } from '../../expenses/expenses.component';
import { IncomesComponent } from '../../incomes/incomes.component';
import { HeaderComponent } from '../../header/header.component';
import { FormularyComponent } from '../../formulary/formulary.component';
import { TransactionService } from '../../services/transaction.service';
import { Transaction } from '../../models/transaction.model';
import { CommonModule } from '@angular/common';
import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ExpensesComponent, IncomesComponent, HeaderComponent, FormularyComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(private transactionService: TransactionService, private budgetService: BudgetService){}
  incomes:Transaction[];
  expenses:Transaction[];

  ngOnInit(): void{
    let transactionsString = localStorage.getItem("AllTransactions");
    if(transactionsString){
      this.transactionService.setTransactions();
    } ;
    let budgetString = localStorage.getItem("TotalBudget");
    if(budgetString){
      this.budgetService.setBudget();
    }

  }
  getAllIncomes(){
    this.incomes = this.transactionService.getIncomes();
    return this.incomes;
  };
  getAllExpenses(){
    this.expenses = this.transactionService.getExpenses();
    return this.expenses;
  };
  getBudget(){
    return this.budgetService.getBudget();
  };
  getbudgetMonths(){
    return this.budgetService.getMonthBudget();
  };
  getExpensesAmount(){
    return this.budgetService.getExpensesAmount();
  }
  getIncomesAmount(){
    return this.budgetService.getIncomesAmount();
  }
 
}
