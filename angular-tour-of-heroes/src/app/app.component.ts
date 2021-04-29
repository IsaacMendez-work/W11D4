import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes'; // This title is being called in app.component.html on line 346 as "<span>{{ title }} app is running!</span>", where {{ title }} is available because we're exporting this component
}
