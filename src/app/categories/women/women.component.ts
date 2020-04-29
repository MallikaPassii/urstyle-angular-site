import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women',
  template: `
    
    <div class="container">
    <h2 class="title is-2">Women's Apparel</h2>
      <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <a routerLink="/categories/Pink T-shirt"><img src="/assets/image/tshirt1.jpg" title="Tshirt - Pink">
              <h5 class="title is-5 has-text-centered">Pink T-shirt</h5></a>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <img src="/assets/image/tshirt2.jpg" title="Tshirt - Black">
              <h5 class="title is-5 has-text-centered">Black T-shirt</h5>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <img src="/assets/image/tshirt3.jpg" title="Tshirt - Grey">
              <h5 class="title is-5 has-text-centered">Grey T-shirt</h5>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <img src="/assets/image/tshirt1.jpg" title="Tshirt - Pink">
              <h5 class="title is-5 has-text-centered">Pink T-shirt</h5>
            </article>
          </div>
        </div>
        <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <img src="/assets/image/tshirt2.jpg" title="Tshirt - Black">
            <h5 class="title is-5 has-text-centered">Black T-shirt</h5>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <img src="/assets/image/tshirt3.jpg" title="Tshirt - Grey">
            <h5 class="title is-5 has-text-centered">Grey T-shirt</h5>
          </article>
        </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <img src="/assets/image/tshirt1.jpg" title="Tshirt - Pink">
              <h5 class="title is-5 has-text-centered">Pink T-shirt</h5>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <img src="/assets/image/tshirt2.jpg" title="Tshirt - Black">
              <h5 class="title is-5 has-text-centered">Black T-shirt</h5>
            </article>
          </div>
        </div>
        <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <img src="/assets/image/tshirt3.jpg" title="Tshirt - Grey">
            <h5 class="title is-5 has-text-centered">Grey T-shirt</h5>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <img src="/assets/image/tshirt1.jpg" title="Tshirt - Pink">
            <h5 class="title is-5 has-text-centered">Pink T-shirt</h5>
          </article>
        </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <img src="/assets/image/tshirt2.jpg" title="Tshirt - Black">
              <h5 class="title is-5 has-text-centered">Black T-shirt</h5>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <img src="/assets/image/tshirt3.jpg" title="Tshirt - Grey">
              <h5 class="title is-5 has-text-centered">Grey T-shirt</h5>
            </article>
          </div>
        </div>
    </div>
  `,
  styles: [`
    .title{
      color: #A0566E;
      font-family: monospace;
      padding-top: 30px;
    }
    .container{
      padding-bottom: 30px;
    }
    .box{
      background-color: #dbf5f7;
    }
  `
  ]
})
export class WomenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
