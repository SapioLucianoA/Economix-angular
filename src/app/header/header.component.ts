import { CommonModule } from '@angular/common';
import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input() budget: number;
  @Input() budgetMonths: number;
  @Input() expensesAmount: number;
  @Input() incomesAmount: number;

  Porcentage(incomes: number, expenses: number): string {
    if (incomes === 0 || expenses === 0) {
      return "0%";
    } else {
      const percentage: number = ((expenses / incomes) * 100) * -1;
      return percentage.toFixed(2) + "%";
    }
  }
}
