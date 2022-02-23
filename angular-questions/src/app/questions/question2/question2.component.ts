/*
Question: Angular clear validators of formArray
Url: https://stackoverflow.com/questions/71227055/angular-clear-validators-of-formarray/71227647#71227647
 */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
})
export class Question2Component {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    const formFields = {
      username: ['user', Validators.required],
      email: ['user@gmail.com', [Validators.required, Validators.email]],
      password: ['pass', Validators.required]
    };
    this.form = this.formBuilder.group(formFields);
  }

  clearValidations(): void {
    const controlKeys = Object.keys(this.form.controls);
    controlKeys.forEach((controlKey) => {
      const field = this.form.controls[controlKey];
      field.clearValidators();
      const currentValue = field.value;
      field.setValue("fakeValue");
      field.setValue(currentValue);
    });
  }

}
