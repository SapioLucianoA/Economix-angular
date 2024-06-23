export class Transaction {
  amount: number;
  description: string;
  id:string;

  constructor(description: string, amount: number, id: string) {
    this.description = description;
    this.amount = amount;
    this.id = id;
  }
  
}