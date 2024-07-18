import { Injectable, OnInit } from '@angular/core';
import { Transaction } from '../models/transaction.model';



@Injectable({
  providedIn: 'root'
})
export class TransactionService implements OnInit {

  constructor() { };

  expenses: Transaction[];

  incomes: Transaction[];

  nullIncomes: Transaction[] = [
    {
      amount: 0,
      description: "You don't have Incomes",
      id: "asdqas654!",
      date: new Date()
    },
  ];

  nullExpenses: Transaction[] = [
    {
      amount: 0,
      description: "You don't have Expenses",
      id: "648436as5d!",
      date: new Date()
    },
  ]

  transactions: Transaction[] = [];

  ngOnInit(): void {
    let transactionsString = localStorage.getItem("AllTransactions");
    if(transactionsString){
      this.deletePastTransactions()
      this.setTransactions();
    }
  }
  
  setTransactions(){
    let transactionsString = localStorage.getItem("AllTransactions");
    this.transactions = JSON.parse(transactionsString);
  }

  // Functions
  getTransactions() {
    return this.transactions;
  };

// Gets
  getExpenses() {
    this.expenses = this.getTransactions().filter(transaction => transaction.amount < 0);
    if (this.expenses.length === 0) {
      return this.nullExpenses;
    } else {
      return this.expenses;
    }
  }

  getIncomes() {
    this.incomes = this.getTransactions().filter(transaction => transaction.amount > 0);
    if (this.incomes.length === 0) {
      return this.nullIncomes;
    } else {
      return this.incomes;
    }
  }

// ADD Transaction
  addTransaction(transaction: Transaction) {
    this.transactions.push(transaction);
    return this.transactions;
  }

  saveTransaction(transactionsArray:Transaction[]){
    this.transactions = transactionsArray;
    localStorage.setItem("AllTransactions", JSON.stringify(this.transactions))
  }

  // ID CREATOR
  generateRandomMixedId(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789^~|+-=[]{}()<>áéíóúñü!@#$%&*';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }

  deletePastTransactions(){
    let fechaActual = new Date();
    let primerDiaDelMesActual = new Date(fechaActual.getFullYear(), fechaActual.getMonth(), 1);
    this.setTransactions();
    let transaccionesFiltradas = this.transactions.filter(transaction => transaction.date > primerDiaDelMesActual);
    this.saveTransaction(transaccionesFiltradas)
  }
}
