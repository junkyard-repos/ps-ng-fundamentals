# NgNotes

### Template Reference Variables
*  Template reference variables allow you to specify a variable name that points to a component, and then you can access any public properties or methods on that component using that variable
``` html
  <h3>{{ thumbnail.event.name }}</h3>
  <app-events-thumbnail #thumbnail [event]="event1"></app-events-thumbnail>
  <button class="btn btn-primary" (click)="thumbnail.logJunk()">Junk Button</button>
  ```