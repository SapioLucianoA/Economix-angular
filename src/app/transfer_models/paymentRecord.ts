export class PaymentRecord{
  description: String;
  amount: number;
  totalPayments: number;

  constructor(description: String, amount: number, totalPayments: number ){
    this.totalPayments = totalPayments;
    this.amount = amount;
    this.description = description;
  }
}