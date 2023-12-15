import { Directive, Input, OnInit } from '@angular/core';
import { IonProgressBar } from '@ionic/angular';

@Directive({
  selector: '[appCustomProgressBar]'
})
export class CustomProgressBarDirective implements OnInit {

  ionicProgressBar: IonProgressBar;

  // ? Make Inputs required
  // (see: https://stackoverflow.com/a/50293330/1116959)
  @Input()
  get progress() {
    throw new Error('Attribute "appCustomProgressBar.progress" is required');
  }
  set progress(value: number) {
    Object.defineProperty(this, 'progress', {
      value,
      writable: true,
      configurable: true
    });
  }

  @Input()
  get max() {
    throw new Error('Attribute "appCustomProgressBar.max" is required');
  }
  set max(value: number) {
    Object.defineProperty(this, 'max', {
      value,
      writable: true,
      configurable: true
    });
  }

  constructor(private hostElement: IonProgressBar) {
    this.ionicProgressBar = hostElement;
  }

  ngOnInit(): void {
    this.ionicProgressBar.buffer = 1;

    const progressValue = (this.progress * 100) / this.max;

    this.ionicProgressBar.value = (progressValue / 100);
  }
}
