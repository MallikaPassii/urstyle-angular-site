import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  template: `
    <div class="container">
      <div class="columns">
        <div class="zoom">
        <img src="/assets/image/tshirt1.jpg" title="Pink T-shirt" class="column" />
        </div>
        <div class="column">
          <h3 class="title is-3 is-capitalized">
            {{ productname }}
          </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <select id="size" value="">
            <option value="x-small">X-Small</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="x-large">X-Large</option>
          </select>
          <button class="button is-medium">Add To Wardrobe</button>
        </div>
      </div>
      <div class="content">
        <h4 class="title is-4">Reviews</h4>
        <ng-container *ngFor="let author of authors;let i=index">
          <h6 class="title is-6">{{ author }}</h6>
          <p *ngFor="let authorReview of authorReviews">{{ authorReview }}</p>
        </ng-container>
      </div>
    </div>
  `,
  styles: [`
  .container{
    padding: 40px 0px;
    margin: 0 auto;
  }  
  .title{
      color: #A0566E;
      font-family: monospace;
      padding-top: 28px; 
    }
    select{
      width: 30%;
      margin: 20px 0px;
      font-family: Monospace, 'Arial', sans-serif;
      font-size: 18px;
      color: #A0566E;
    }
    .button{
      display: block;
      color: #A0566E;
      border-color: #A0566E;
    }
    .button:hover{
      background-color: rgba(240,206,206,0.85);
    }
    .zoom{
      height: 375px;
      overflow: hidden;
    }
    .zoom img{
      transition: transform .5s ease;
    }
    .zoom:hover img{
      -ms-transform: scale(1.5); /* IE 9 */
      -webkit-transform: scale(1.5); /* Safari 3-8 */
      transform: scale(1.5);
    }
  `
  ]
})
export class ProductDetailsComponent implements OnInit {
  productname;
  authors=['Steven Cooper','Ana Maria','John Doe','Elizabeth','Jane Doe'];
  authorReviews=['Great fit! The material is comfortable and fits as expected.','Great fit! The material is comfortable and fits as expected.','Great fit! The material is comfortable and fits as expected.','Great fit! The material is comfortable and fits as expected.','Great fit! The material is comfortable and fits as expected.'];
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const product = params['productname'];
      this.productname = product;
    });
  }

}
