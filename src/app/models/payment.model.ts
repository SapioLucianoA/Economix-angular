export class Payment {
  amount: number;
  description: string;
  totalPayments: number;
  soldPayment: number;
  id:string;

  constructor(description: string, amount: number, id: string, totalPayments: number, soldPayment: number ) {
    this.description = description;
    this.soldPayment = soldPayment;
    this.totalPayments = totalPayments;
    this.amount = amount;
    this.id = id;
  }
  
}