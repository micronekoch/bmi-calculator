import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  private formBuilder = inject(FormBuilder);

  title = 'bmi-calculator';

  calculatorForm = this.formBuilder.group({
    weight: [''],
    height: [''],
  });

  calculateBmi = () => {
    let height = 0;
    let weight = 0;

    if (this.calculatorForm.value.height) {
      height = parseFloat(this.calculatorForm.value.height);
    }

    if (this.calculatorForm.value.weight) {
      weight = parseFloat(this.calculatorForm.value.weight);
    }

    if (height === 0) {
      return 0;
    }

    return weight / ((height / 100) ^ 2);
  }
}
