import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-women',
  template: `
    
    <div class="container">
    <h2 class="title is-2">Women's Apparel</h2>
      <div class="tile is-ancestor">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <img src="/assets/image/tshirt_giphy.gif" title="Tshirt - Orange">
              <h5 class="title is-5 has-text-centered">Orange T-shirt</h5>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <img src="/assets/image/tshirt2.gif" title="Tshirt - 2">
              <h5 class="title is-5 has-text-centered">Blue T-shirt</h5>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <img src="/assets/image/tshirt_giphy.gif" title="Tshirt - Orange">
              <h5 class="title is-5 has-text-centered">Orange T-shirt</h5>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <img src="/assets/image/tshirt2.gif" title="Tshirt - 2">
              <h5 class="title is-5 has-text-centered">Blue T-shirt</h5>
            </article>
          </div>
        </div>
        <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <img src="/assets/image/tshirt2.gif" title="Tshirt - 2">
            <h5 class="title is-5 has-text-centered">Blue T-shirt</h5>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <img src="/assets/image/tshirt_giphy.gif" title="Tshirt - Orange">
            <h5 class="title is-5 has-text-centered">Orange T-shirt</h5>
          </article>
        </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <img src="/assets/image/tshirt2.gif" title="Tshirt - 2">
              <h5 class="title is-5 has-text-centered">Blue T-shirt</h5>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <img src="/assets/image/tshirt_giphy.gif" title="Tshirt - Orange">
              <h5 class="title is-5 has-text-centered">Orange T-shirt</h5>
            </article>
          </div>
        </div>
        <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <img src="/assets/image/tshirt2.gif" title="Tshirt - 2">
            <h5 class="title is-5 has-text-centered">Blue T-shirt</h5>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <img src="/assets/image/tshirt_giphy.gif" title="Tshirt - Orange">
            <h5 class="title is-5 has-text-centered">Orange T-shirt</h5>
          </article>
        </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <img src="/assets/image/tshirt2.gif" title="Tshirt - 2">
              <h5 class="title is-5 has-text-centered">Blue T-shirt</h5>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child box">
              <img src="/assets/image/tshirt_giphy.gif" title="Tshirt - Orange">
              <h5 class="title is-5 has-text-centered">Orange T-shirt</h5>
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
