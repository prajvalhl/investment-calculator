import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  initialInvestment?: number;
  annualInvestment?: number;
  expectedReturn?: number;
  duration?: number;

  onFormSubmit() {
    if (
      this.initialInvestment &&
      this.annualInvestment &&
      this.expectedReturn &&
      this.duration
    ) {
      console.log({
        initialInvestment: this.initialInvestment,
        annualInvestment: this.annualInvestment,
        expectedReturn: this.expectedReturn,
        duration: this.duration,
      });
    }
  }
}
