export class Transaction {
  amount: number;
  description: string;
  id:string;
  date: Date;

  constructor(description: string, amount: number, id: string, date: Date) {
    this.description = description;
    this.amount = amount;
    this.id = id;
    this.date = date;
  }
}