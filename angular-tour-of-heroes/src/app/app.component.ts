import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes'; // This title is being called in app.component.html, where {{ title }} is available because we're exporting this component when we declared it above using "export class"
}
