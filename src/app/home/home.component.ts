import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <section class="hero is-link is-fullheight-with-navbar is-bold">
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title">
          Fullheight hero with navbar
        </p>
      </div>
    </div>
  </section>
  `,
  styles: [`
    .hero{
      background-image: url('/assets/image/bg1.jpg') !important;
      background-size: cover;
      background-position: center center;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
