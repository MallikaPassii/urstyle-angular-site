import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer is-paddingless">
      <div class="container has-text-centered">
        <div id="cont">
          <h3>&copy; UrStyle Inc. | <a routerLink="/contact" title="contact us page">Contact Us</a> </h3>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer{
      background-color: rgba(240, 206, 206, 0.85);
      height: 36px;
    }
    #cont, #cont a{
      color: #A0566E;
      font-family: monospace;
      font-size: 24px;
    }
  `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
