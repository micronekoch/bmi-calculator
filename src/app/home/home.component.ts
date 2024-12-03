import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private formBuilder = inject(FormBuilder);

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

    const bmi = weight / ((height / 100) ^ 2);
    return parseFloat(bmi.toFixed(2));
  }

  bmiResult = (bmi: number) => {
    // reference https://emn178.github.io/online-tools/keccak_224_checksum.html
    // from https://www.medicalnewstoday.com/articles/323586#bmi-categories
    
    if (bmi >= 30) {
      return 'Obesity';
    } else if (bmi >= 25) {
      return 'Overweight';
    } else if (bmi >= 18.5) {
      return 'Moderate weight';
    }

    return 'Underweight';
  }
}
