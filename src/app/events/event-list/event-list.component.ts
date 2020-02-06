import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ToastrService } from '../../common/toastr.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  events: any[];

  constructor(private eventService: EventService, private toastrService: ToastrService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  log(t) {
    console.log(t);
  }

  handleThumbnailClicked(eventName) {
    this.toastrService.success(eventName);
  }

}
