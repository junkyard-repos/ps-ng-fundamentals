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

  getStartTimeClass() {
    if (this.event && this.event.time === '8:00 am') {
      return ['green', 'bold'];
    }
  }

  getStartTimeStyle(): any {
    if (this.event && this.event.time === '8:00 am') {
      return { color: '#00cc00', 'font-weight': 'bold' };
    }
  }

  logJunk() {
    console.log('Junk');
  }

  log(t) {
    console.log(t);
  }

  // handleClickMe() {
  //   console.log(this.event);
  //   this.eventClick.emit(this.event.name);
  // }
}
