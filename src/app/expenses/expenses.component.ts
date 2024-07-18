import { Component, Input } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { Transaction } from '../models/transaction.model';
import { CommonModule } from '@angular/common';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css'
})
export class ExpensesComponent {
  constructor(private transactionService: TransactionService, private budgetService: BudgetService){}
  
  @Input() expenses: Transaction[];
  @Input() incomesAmount: number;

  deleteTransaction(id:string){
    let newTransaction: Transaction[];
    let transaction: Transaction;
    let amountPositiva:number;
    // obtengo  la transaction x Id
    transaction =  this.transactionService.transactions.find(transaction => transaction.id === id);

    // como su amount es negativa lo cambio a positivo
    amountPositiva = transaction.amount * -1
    
    // seteo el budget general
    this.budgetService.saveBudget(amountPositiva)

    //Filtro la transaction
    newTransaction = this.transactionService.transactions.filter(transaction => transaction.id != id);

    // guardo los cambios en mi array
    this.transactionService.saveTransaction(newTransaction);
    }
  
}
