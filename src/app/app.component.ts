import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-hotel';
  public name = [
    {title: 'khuthy', email: 'muenda@gmail.com'}
  ]
}
