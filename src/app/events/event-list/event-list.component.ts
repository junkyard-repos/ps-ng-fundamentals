import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  constructor() { }

  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '../../../assets/images/angularconnect-shield.png',
    location: {
      address: '1057',
      city: 'London',
      country: 'England'
    }
  };

  // handleEventClicked(data) {
  //   console.log(data);
  // }

  ngOnInit() {
  }

}
