import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-english-only-app';
  public nestedForm: FormGroup = new FormGroup({
    basicInfo: new FormControl("")
  });
  
  constructor() {
  }

  ngOnInit(): void {
    this.nestedForm.valueChanges.subscribe(v => console.log(v))
  }
}
