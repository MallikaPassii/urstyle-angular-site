import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="navbar">
      <div class="navbar-brand">
        <a class="navbar-item logo" routerLink="/">
          <img src="/assets/image/favicon.png" routerLink="/" />UrStyle
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" routerLink="/">Home</a>
          <a class="navbar-item" routerLink="/contact">Contact Us</a>
          <a class="navbar-item" routerLink="/users">Users</a>
        </div>
      </div>
    </div>

    
  `,
  styles: [`
    .navbar{
      background: #A0566E;
    }
    .logo{
      font-family: monospace;
      font-size: 24px;
      color: rgba(240,206,206);
    }
    .logo:hover{
      color: #f7d9e8;
    }
    .navbar-menu .navbar-item{
      color: rgba(240,206,206);
      font-family: monospace;
      font-size: 24px;
    }
  `
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
