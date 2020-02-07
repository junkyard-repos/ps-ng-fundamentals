import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { EventService } from '../shared/event.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivatorService implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree |
    Observable<boolean | UrlTree> |
    Promise<boolean | UrlTree> {
    const eventExists = !!this.eventService.getEvent(+route.params.id);

    if (!eventExists) {
      this.router.navigate(['/404']);
    }
    return eventExists;
  }

  constructor(private eventService: EventService, private router: Router) { }
}
