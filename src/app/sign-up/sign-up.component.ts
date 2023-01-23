import { Component } from '@angular/core';
import { Order } from '../models/order';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  model: Order = new Order("", "", "", "");

  onSubmit(): void {
    // form submitted
    console.log(this.model);
  }
}
