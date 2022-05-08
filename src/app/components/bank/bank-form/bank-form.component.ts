import { Component } from '@angular/core';
import { BankService } from 'src/app/services/bank.service';
import { ClientService } from 'src/app/services/client.service';
import { ExpoService } from 'src/app/services/expo.service';
import { FormConfig, FormStyle } from 'src/app/utils/form';

@Component({
  selector: 'app-bank-form',
  template: `<app-form title="Bank Form" [config]="config" [style]="style" [service]="bankService"></app-form>`
})
export class BankFormComponent {

  constructor(
    public bankService: BankService,
    public clientService: ClientService,
    public expoService: ExpoService
  ) { }

  pending = false;
  config: FormConfig = {
    ClientId: {
      type: 'select',
      validation: 'required',
      //options: this.clientService.read(),
      options: [
        {
          Id: 1,
          BankAccountId: 1,
          JMBG: "1231231231231",
          FirstName: 'Sinisa',
          LastName: 'Sinisic',
          ParentName: 'Sika',
          Address: 'Stanislava Binickog',
          PhoneNumber: '06012312312'
        },
        {
          Id: 2,
          BankAccountId: 2,
          JMBG: "2342342342342",
          FirstName: 'Mika',
          LastName: 'Mikic',
          ParentName: 'Miklos',
          Address: 'Milivoja Blaznavca',
          PhoneNumber: '06023423423'
        },
        {
          Id: 3,
          BankAccountId: 3,
          JMBG: "3453453453453",
          FirstName: 'Pavle',
          LastName: 'Radenovic',
          ParentName: 'Vukan',
          Address: 'Ive Andrica',
          PhoneNumber: '06034534534'
        }
      ],
      optionKey: 'Id',
      optionValue: 'Id',
    },
    ExpoId: {
      type: 'select',
      validation: 'required',
      //options: this.expoService.read(),
      options: [
        {
          Id: 1,
          RegistrationNumber: 1,
          City: 'Novi Sad',
          Address: 'Jevrejska 53',
        },
        {
          Id: 2,
          RegistrationNumber: 2,
          City: 'Beograd',
          Address: 'Ruzveltova 12',
        },
        {
          Id: 3,
          RegistrationNumber: 3,
          City: 'Zrenjanin',
          Address: 'Mike Antica 24',
        }
      ],
      optionKey: 'Id',
      optionValue: 'Id',
    },
    AccountType: {
      type: 'select',
      validation: 'required',
      options: ['Dinar', 'Foreign'],
    },
    CurrencyType: {
      type: 'select',
      validation: 'required',
      options: ['RSD', 'USD', 'EUR'],
    },
    Balance: {
      type: 'text',
      validation: 'required'
    }
  }
  style: FormStyle = {
    width: '500px',
    'margin-top': '200px'
  }

}
