import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[englishOnly]'
})
export class NgxEnglishOnlyDirective {
  private readonly allowSpecialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', '-', 'ArrowRight', 'ArrowLeft'];

  private readonly REGEX_EN: RegExp = /^[a-zA-Z0-9.\s?><;:",{}()[\]\-_+=!@#$%\^’‘&*|'/\\]*$/g;

  constructor(private control: NgControl) { }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.allowSpecialKeys.indexOf(event.key) !== -1) {
      return;
    }

    const current: string = this.control.control?.value;
    const next: string = current.concat(event.key);

    if (next && !String(next).match(this.REGEX_EN)) {
      event.preventDefault();
    }
  }

  @HostListener('input', ['$event']) 
  onInputChange() {
    this.control.control?.setValue(Array.from(this.control.control?.value as string || '').filter(v => v.match(this.REGEX_EN)).join(''));
  }
}
