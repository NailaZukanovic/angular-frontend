import { Component } from '@angular/core';
import { BankService } from 'src/app/services/bank.service';
import { FormConfig, FormStyle } from 'src/app/utils/form';

@Component({
  selector: 'app-bank-form',
  template: `<app-form title="Bank Form" [config]="config" [style]="style" [service]="bankService"></app-form>`
})
export class BankFormComponent {

  constructor(
    public bankService: BankService
  ) { }

  pending = false;
  config: FormConfig = {
    AccountType: {
      validation: 'required'
    },
    CurrencyType: {
      validation: 'required'
    },
    Balance: {
      validation: 'required'
    }
  }
  style: FormStyle = {
    width: '500px',
    'margin-top': '200px'
  }

}
