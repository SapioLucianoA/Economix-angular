import { Payment } from "./payment.model";
import { Transaction } from "./transaction.model";

export class Client{
  id: String;
  lastName: String;
  name: String;
  email: String;
  transactions: Transaction[];
  payments: Payment[];

  constructor(id: String, lastName: String, name: String,  email: String, transactions: Transaction[],payments: Payment[]){
    this.id = id;
    this.lastName = lastName;
    this.name = name;
    this.email = email;
    this.transactions = transactions;
    this.payments = payments;
  }


}