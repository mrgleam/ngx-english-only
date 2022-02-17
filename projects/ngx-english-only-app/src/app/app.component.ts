import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-english-only-app';
  name = new FormControl('', Validators.required);
  email = new FormControl('', Validators.email)
  constructor() {
    this.name.setValue('test');
  }
  ngOnInit(): void {
    this.name.valueChanges.subscribe(v => console.log(v))
  }
}
