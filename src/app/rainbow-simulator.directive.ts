import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbowSimulator]'
})
export class RainbowSimulatorDirective {
  private colors = ['red','orange','yellow','green','blue','purple'];
  @HostBinding('style.color') color = '';
  @HostBinding('style.border-color') borderColor = '';
  constructor() { }
  @HostListener('keyup') keyup() {
    this.color = this.colors[Math.floor(Math.random()*(this.colors.length))]
  }

}
