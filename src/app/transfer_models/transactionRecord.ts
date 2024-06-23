export class TransactionRecord{
  description: String;
  amount: number;

  constructor(description: String,amount: number ){
    this.description = description;
    this.amount = amount;
  }
}