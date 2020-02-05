# NgNotes

### Template Reference Variables

*  Template reference variables allow you to specify a variable name that points to a component, and then you can access any public properties or methods on that component using that variable

``` html
<!-- {{ template statement }} -->
<h3>{{ thumbnail.event.name }}</h3>
<!-- #template-reference, [property binding] -->
<app-events-thumbnail #thumbnail [event]="event1"></app-events-thumbnail>
<!-- (event binding) -->
<button class="btn btn-primary" (click)="thumbnail.logJunk()">Junk Button</button>
```

```typescript
event1 = {
  id: 1,
  name: 'Angular Connect',
  ...
};
```

### Generateing a component with the cli

`ng g c <folder>/<component name>`

### Structural Directive

* Change the shape of the DOM. Prefixed with an asterisk.

```html
<app-events-thumbnail #thumbnail *ngFor="let event of events" [event]="event"></app-events-thumbnail>
```

