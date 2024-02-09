import { Component } from '@angular/core';

@Component({
  selector: 'app-offer-details',
  templateUrl: './offer-details.component.html',
  styleUrls: ['./offer-details.component.scss']
})
export class OfferDetailsComponent {
  showMore=false;
  isOffers=false;
  isReview=false;
  isItems=false;
  isPhotos=false;
  constructor(){
    window.scrollTo(0,0)
  }
  showOffers(){
    this.isOffers=true;
    this.isReview=false;
    this.isPhotos=false;
    this.isItems=false;
  }
  showReview(){
    this.isOffers=false;
    this.isReview=true;
    this.isPhotos=false;
    this.isItems=false;
  }
  showPhotos(){
    this.isOffers=false;
    this.isReview=false;
    this.isPhotos=true;
    this.isItems=false;
  }
  showItems(){
    this.isOffers=false;
    this.isReview=false;
    this.isPhotos=false;
    this.isItems=true;
  }
}
