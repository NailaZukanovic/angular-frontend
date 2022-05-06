import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormConfig } from '../utils/form';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(
    private builder: FormBuilder
  ) { }

  build(config: FormConfig) {
    const data = {}
    for (const control in config) {
      data[control] = ['', this.buildValidation(config[control].validation)]
    }
    return this.builder.group(data);
  }

  private buildValidation(config: 'none' | 'required' | 'positive-integer') {
    if (config === 'required') {
      return [Validators.required, Validators.pattern(new RegExp('\\S'))]
    }
    if (config === 'positive-integer') {
      return [Validators.required, Validators.pattern(/^([1-9]\d*)?$/)]
    }
    return undefined;
  }

}
