import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './nav/navbar/navbar.component';

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
    NavbarComponent
  ],
  // services
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
