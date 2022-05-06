import { Component } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { FormConfig, FormStyle } from 'src/app/utils/form';

@Component({
  selector: 'app-client-form',
  template: `<app-form title="Client Form" [config]="config" [style]="style" [service]="clientService"></app-form>`
})
export class ClientFormComponent {

  constructor(
    public clientService: ClientService
  ) { }

  pending = false;
  config: FormConfig = {
    JMBG: {
      validation: 'required'
    },
    FirstName: {
      validation: 'required'
    },
    LastName: {
      validation: 'required'
    },
    ParentName: {
      validation: 'required'
    },
    Address: {
      validation: 'required'
    },
    PhoneNumber: {
      validation: 'required'
    }
  }
  style: FormStyle = {
    width: '500px',
    'margin-top': '200px'
  }

}
