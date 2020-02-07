import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  CreateEventComponent,
  EventListComponent,
  EventDetailsComponent,
  EventListResolverService,
  EventService,
  EventRouteActivatorService,
  EventThumbnailComponent
} from './events';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { ToastrService } from './common/toastr.service';
import { Error404Component } from './errors/error404/error404.component';

@NgModule({
  // other modules
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // component, app, or directive
  // these can depend on imports
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
  ],
  // services
  providers: [EventService,
    ToastrService,
    EventRouteActivatorService,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    EventListResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
