import { Component } from '@angular/core';
import { WorkerService } from 'src/app/services/worker.service';
import { FormConfig, FormStyle } from 'src/app/utils/form';

@Component({
  selector: 'app-worker-form',
  template: `<app-form title="Expo Form" [config]="config" [style]="style" [service]="workerService"></app-form>`
})
export class WorkerFormComponent {

  constructor(
    public workerService: WorkerService
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
    },
    EmailAddresses: {
      validation: 'required'
    },
    Role: {
      validation: 'required'
    },
    HiredFromDate: {
      type: 'date',
      validation: 'required'
    },
    HiredUntilDate: {
      type: 'date',
      validation: 'required'
    },
    IsExpoChief: {
      type: 'select',
      validation: 'required',
      options: [{ text: 'Yes', val: true }, { text: 'No', val: false }],
      optionKey: 'text',
      optionValue: 'val',
    }
  }
  style: FormStyle = {
    width: '500px',
    'margin-top': '200px'
  }

}
