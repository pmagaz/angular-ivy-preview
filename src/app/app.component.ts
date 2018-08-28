import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div> Hello, {{ name }}! </div>',
})
export class AppComponent {
  title = 'angular-ivy-preview';
  @Input() name: string;

}
