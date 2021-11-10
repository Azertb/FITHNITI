import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
   <footer class="footer">
  <div class="content has-text-centered">
    <p>
      <strong>FI THNITI</strong> by <a href="https://jgthms.com">Tbini Azer</a>, <a href="https://jgthms.com">Benhassine Saba</a> and <a href="https://jgthms.com">Mannai Ikram</a>. 
   
    </p>
  </div>
</footer>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
