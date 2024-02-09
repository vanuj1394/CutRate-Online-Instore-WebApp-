import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  value = '';
  offer = [{
    "img":"https://www.freepnglogos.com/uploads/puma-red-logo-png-11.png",
    "offer_details":"FLAT 50% OFF"
  },
  {
    "img":"https://www.freepnglogos.com/uploads/adidas-logo-png-hd-17.png",
    "offer_details":"FLAT 20% OFF"
  },
  {
    "img":"https://www.freepnglogos.com/uploads/reebok-logo-png/crossfit-logo-reebok-images-galleries-1.png",
    "offer_details":"BUY 1 GET 1"
  },
  {
    "img":"https://www.pngmart.com/files/22/HM-Logo-PNG.png",
    "offer_details":"FLAT 90% OFF"
  },
  {
    "img":"https://www.freepnglogos.com/uploads/reebok-logo-png/crossfit-logo-reebok-images-galleries-1.png",
    "offer_details":"BUY 2 GET 5"
    

  },
  {
    "img":"https://www.freepnglogos.com/uploads/adidas-logo-png-hd-17.png",
    "offer_details":"FLAT 50% OFF"
    

  },
  {
    "img":"https://www.freepnglogos.com/uploads/puma-red-logo-png-11.png",
    "offer_details":"FLAT 50% OFF"
  }
]
}
