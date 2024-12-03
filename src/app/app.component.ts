import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bmi-calculator';
  colorMode = 'light';

  changeColorMode() {
    if (this.colorMode === 'light') {
      this.colorMode = 'dark';
    } else {
      this.colorMode = 'light';
    }
  }
}
