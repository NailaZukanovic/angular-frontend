import { Component } from '@angular/core';
import { ExpoService } from 'src/app/services/expo.service';
import { FormConfig, FormStyle } from 'src/app/utils/form';

@Component({
  selector: 'app-expo-form',
  template: `<app-form title="Expo Form" [config]="config" [style]="style" [service]="expoService"></app-form>`
})
export class ExpoFormComponent {

  constructor(
    public expoService: ExpoService
  ) { }

  pending = false;
  config: FormConfig = {
    Balance: {
      validation: 'required'
    },
  }
  style: FormStyle = {
    width: '500px',
    'margin-top': '200px'
  }


}
