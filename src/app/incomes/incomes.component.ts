import { Component, Input } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { Transaction } from '../models/transaction.model';
import { CommonModule } from '@angular/common';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-incomes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './incomes.component.html',
  styleUrl: './incomes.component.css'
})
export class IncomesComponent {
  constructor(private transactionService: TransactionService, private budgetService: BudgetService){}
  
  @Input() incomes: Transaction[];

  
  deleteTransaction(id:string){
    let newTransaction: Transaction[];
    let transaction: Transaction;
    let amountNegativa:number;
    // obtengo  la transaction x Id
    transaction =  this.transactionService.transactions.find(transaction => transaction.id === id);

    // como su amount es positiva lo cambio a negativo
    amountNegativa = transaction.amount * -1;
    console.log(amountNegativa)
    
    // seteo el budget general
    this.budgetService.saveBudget(amountNegativa);

    //Filtro la transaction
    newTransaction = this.transactionService.transactions.filter(transaction => transaction.id != id);

    // guardo los cambios en mi array
    this.transactionService.saveTransaction(newTransaction);
    }

}
