import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Contact Us</h1>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <form (ngSubmit)="submitForm()" #contactForm="ngForm">
          <div class="field">
            <label class="label">Name</label>
            <input type="text" name="name" class="input" [(ngModel)]="name" #nameInput="ngModel" required/>
            <div class="help is-error" *ngIf="nameInput.invalid && nameInput.dirty">
              Your name is required.
            </div>
          </div>
          <div class="field">
            <label class="label">Email</label>
            <input type="email" name="email" class="input" [(ngModel)]="email" #emailInput="ngModel" required email/>
            <div class="help is-error" *ngIf="emailInput.invalid && emailInput.dirty">
              Needs to be a valid email.
            </div>
          </div>
          <div class="field">
            <label class="label">Your Message</label>
            <textarea name="message" class="textarea" [(ngModel)]="message" #messageInput="ngModel" required></textarea>
            <div class="help is-error" *ngIf="messageInput.invalid && messageInput.dirty">
              Your message is required!
            </div>
          </div>
          <button type="submit" class="button is-large" [disabled]="contactForm.invalid">
            Send
          </button>
        </form>
      </div>
    </section>
    <div class="modal" [ngClass]="{'is-active': formComplete}">
      <div class="modal-background"></div>
      <div class="modal-content">
        Thank You!
      </div>
      <button class="modal-close is-large" aria-label="close"></button>
    </div>
  `,
  styles: [`
    .modal-content{
      height: 100px;
      vertical-align: middle;
      background: #fff;
      border-color: #A0566E;
      border-radius: 10px;
      font-size: 30px;
      text-align: center;
      color: pink;
      padding: 32px;
    }
    .button.is-large{
      color: #A0566E;
      border: 1px solid #A0566E; 
    }
    .hero.is-primary.is-bold{
      background: rgb(246,210,210);
      background: linear-gradient(141deg, rgba(246,210,210,1) 0%, rgba(194,239,254,1) 100%);
    }
    .hero .title{
      color: #A0566E;
    }
  `
  ]
})
export class ContactComponent implements OnInit {

  name: string;
  email: string;
  message: string;
  formComplete = false;

  constructor() { }

  ngOnInit(): void {

  }

  submitForm() {
    this.formComplete = true;
  }

}
