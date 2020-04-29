import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <section class="hero is-link is-fullheight-with-navbar is-bold">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h2 class="title is-2">
          UrStyle
        </h2>
      </div>
    </div>
  </section>

  <section>
      <ul class="categoryGrid">
        <li id="categorywomen"><div class="overlay"><a routerLink="/categories/women" title="Women">Women</a></div></li>
        <li id="categorymen"><div class="overlay"><a routerLink="/categories/men" title="Men">Men</a></div></li>
        <li id="categoryfootwear"><div class="overlay"><a routerLink="/categories/footwear" title="Footwear">Footwear</a></div></li>
        <li id="categoryfragrances"><div class="overlay"><a routerLink="/categories/fragrances" title="Fragrances">Fragrances</a></div></li>
      </ul>
  </section>
                
      <div class="tagLine">
        <marquee>Your style is Fashion!</marquee>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child">
            <img src="/assets/image/gridImg1.jpg" title="Grid img 1">
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child">
            <img src="/assets/image/gridImg2.jpg" title="Grid img 2">
            <img src="/assets/image/gridImg4.jpg" title="Grid img 4">
            <h3 class="title is-3" style="color: #4dd2ff;font-family: monospace;">Your Style...</h3>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child">
            <img src="/assets/image/gridImg5.jpg" title="Grid img 5">
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child">
            <h3 class="title is-3" style="color: #A0566E;font-family: monospace;">Your Fashion...</h3>
            <img src="/assets/image/gridImg3.jpg" title="Grid img 3">
            <img src="/assets/image/gridImg9.jpg" title="Grid img 9">
          </article>
        </div>
      </div>
  `,
  styles: [`
    .hero{
      background-image: linear-gradient(90deg, rgba(255,255,255,0.65), rgba(240, 206, 206, 0.85)), url('/assets/image/blue1.jpg') !important;
      background-size: cover;
      background-position: center center;
    }
    .title.is-2{
      font-family: fantasy;
      font-style: normal;
      font-weight: normal;
      font-size: 64px;
      line-height: 79px;
      color: #A0566E;
    }
    li#categorywomen {
      background-image: url("../assets/image/women.jpg");
    }
    li#categorymen {
        background-image: url("../assets/image/men.jpg");
    }
    li#categoryfootwear {
        background-image: url("../assets/image/footwear.jpg");
    }
    li#categoryfragrances {
        background-image: url("../assets/image/fragrances.jpg");
    }
    
    ul.categoryGrid {
        margin: 0 auto;
        max-width: 95%;
        padding: 50px 30px;
        text-align: center;
    }
    
    .categoryGrid li{
        list-style: none;
        height: 400px;
        width: 272px;
        display: inline-block;
        background-position: center;
        background-size: cover;
        margin: 10px;
        position: relative;
    }
    .overlay {
      position: absolute;
      bottom: 0;
      background: rgb(255, 255, 255);
      background: rgba(255, 255, 255, 0.8); /* White see-through */
      color: #A0566E;
      width: 100%;
      transition: .5s ease;
      opacity:1;
      color: A0566E;
      font-size: 20px;
      padding: 20px;
      text-align: center;
        text-transform: uppercase;
    }
    
    .overlay:hover {
        height: 100%;
        text-align: center;
        padding-top: 20rem;
    }
    .categoryGrid .overlay a{
      color: #A0566E;
    }

    .tagLine{
      text-align: center;
      font-size: 46px;
      font-family: monospace;
    }
    marquee{
      color: #c2effe;
      -webkit-text-stroke: 1px #4dd2ff;
    }
    .tile.is-ancestor{
      padding: 40px 0px;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
