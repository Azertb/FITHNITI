import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header>
  <app-router></app-router>
  
  <app-footer></app-footer>

  `
  
  ,
  styles: []
})
export class AppComponent {
  title = 'my-angular-site';
}
