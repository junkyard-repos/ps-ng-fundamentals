import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})
export class EventThumbnailComponent implements OnInit {

  constructor() { }

  @Input() event: any;
  // @Output() eventClick = new EventEmitter();
  someProperty = 'some value';

  ngOnInit() {
  }


  logJunk() {
    console.log('Junk');
  }

  // handleClickMe() {
  //   console.log(this.event);
  //   this.eventClick.emit(this.event.name);
  // }
}
