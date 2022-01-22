import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';
  person = {
    name: 'John Doe',
    age: 30,
    address: '26th Main, Kormanagala, Bagalore, India'
  };

  onComponentLoad(event) {
    console.log(event);
  }
}
