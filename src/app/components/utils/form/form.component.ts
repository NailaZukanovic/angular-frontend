import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { FormService } from 'src/app/services/form.service';
import { StandardRestService } from 'src/app/services/standard-rest';
import { FormConfig, FormStyle } from 'src/app/utils/form';
import { SNACKBAR_CLOSE_BUTTON, SNACKBAR_ERROR_CONFIG, SNACKBAR_ERROR_TEXT } from 'src/app/utils/popup';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(
    private formService: FormService,
    private route: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar
  ) { }

  @Input() title: string;
  @Input() config: FormConfig;
  pending = false;
  @Input() style: FormStyle;
  @Input() service: StandardRestService<any>
  form: FormGroup;
  get editing() {
    return this.route.snapshot.params['id'] !== 'new'
  }

  get controls() {
    return Object.keys(this.config).filter(control => this.config[control].type !== 'file')
  }

  get fileControls() {
    return Object.keys(this.config).filter(control => this.config[control].type === 'file')
  }

  ngOnInit() {
    this.form = this.formService.build(this.config);
    if (this.editing) {
      this.service.readOne(+this.route.snapshot.params['id']).subscribe(res => this.form.reset(res))
    }
  }

  type(control: string) {
    return this.config[control].type || 'text'
  }

  options(control: string) {
    return this.config[control].options || []
  }

  optionKey(control: string) {
    return this.config[control].optionKey
  }

  optionValue(control: string) {
    return this.config[control].optionValue
  }

  compareOptions(item1: any, item2: any) {
    if (typeof item1 === 'object' && typeof item2 === 'object') {
      if ('Id' in item1 && 'Id' in item2) {
        return item1['id'] === item2['id']
      }
    }
    return item1 === item2
  }

  async handleSubmit() {
    if (this.form.invalid) {
      this.form.markAsTouched();
      return;
    }
    this.pending = true;

    try {
      if (this.editing) {
        await this.service.create(this.form.value).toPromise();
      } else {
        await this.service.update(this.form.value['Id'], this.form.value).toPromise();
      }
      this.pending = false;

      this.router.navigate([this.service.backUrl])
    }

    catch {
      this.pending = false;
      this.snackbar.open(SNACKBAR_ERROR_TEXT, SNACKBAR_CLOSE_BUTTON, SNACKBAR_ERROR_CONFIG);
    }
  }

  capitalize(text: string) {
    text = text.replace(/([a-z])([A-Z])/g, '$1 $2');
    return text[0].toUpperCase() + text.substr(1).toLowerCase();
  }

}
