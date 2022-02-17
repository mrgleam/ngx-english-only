import { Directive, ElementRef, forwardRef, HostListener, Renderer2 } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[englishOnly]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxEnglishOnlyDirective),
      multi: true
    }
  ],
})
export class NgxEnglishOnlyDirective implements ControlValueAccessor {
  private isDisabled = false;
  private readonly allowSpecialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', '-', 'ArrowRight', 'ArrowLeft'];

  private readonly REGEX_EN: RegExp = /^[a-zA-Z0-9.\s?><;:",{}()[\]\-_+=!@#$%\^’‘&*|'/\\]*$/g;

  onChangeFn: (value: any) => void = () => {
  };

  onTouchedFn = () => {
  };

  constructor(private elm: ElementRef, private renderer: Renderer2) { }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.allowSpecialKeys.indexOf(event.key) !== -1) {
      return;
    }

    const current: string = this.elm.nativeElement.value;
    const next: string = current.concat(event.key);

    if (next && !String(next).match(this.REGEX_EN)) {
      event.preventDefault();
    }
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur(value: string) {
    const replaced = Array.from(value).filter(v => v.match(this.REGEX_EN)).join('');
    this.elm.nativeElement.value = replaced;
    this.onChangeFn(replaced);
    this.onTouchedFn();
  }

  @HostListener('paste', ['$event'])
  onPaste(event: ClipboardEvent) {
    const clipboardData: DataTransfer | null = event.clipboardData;
    const pastedDate: string = clipboardData?.getData('Text') || '';
    const current: string = this.elm.nativeElement.value;
    const replaced = Array.from(current?.concat(pastedDate)).filter(v => v.match(this.REGEX_EN)).join('');
    this.onChangeFn(replaced);
  }
  
  writeValue(value: string): void {
    this.elm.nativeElement.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouchedFn = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
    if (this.isDisabled) {
      this.renderer.setProperty(this.elm.nativeElement, 'disabled', 'disabled');
    } else {
      this.renderer.removeAttribute(this.elm.nativeElement, 'disabled');
    }
  }
}
