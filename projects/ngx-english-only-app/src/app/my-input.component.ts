import { Component, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormGroup, FormControl, NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'my-input',
  template:`
  <ng-container [formGroup]="basicInfoForm">
    <label for="Full Name"> Full Name </label>
    <div>
      <textarea rows="3" formControlName="fname" englishOnly></textarea>
    </div>
    <label for="Email"> Email </label>
    <div>
      <input type="email" formControlName="email">
    </div>
  </ng-container>`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(()  => MyInputComponent ),
      multi: true
    },
    {
     provide: NG_VALIDATORS,
     useExisting: forwardRef(() => MyInputComponent),
     multi: true
   }
  ]
})

export class MyInputComponent implements OnInit, ControlValueAccessor, Validator {
  public basicInfoForm: FormGroup = new FormGroup(
  {
    fname: new FormControl(""),
    email: new FormControl("")
  });
  constructor() { }
  
  ngOnInit() {
  }

  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    val && this.basicInfoForm.setValue(val, { emitEvent: false });
  }
  registerOnChange(fn: any): void {
    this.basicInfoForm.valueChanges.subscribe(fn);
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.basicInfoForm.disable() : this.basicInfoForm.enable();
  }
  
  validate(c: AbstractControl): ValidationErrors | null{
    return this.basicInfoForm.valid ? null : { invalidForm: {valid: false, message: "basicInfoForm fields are invalid"}};
  }
}