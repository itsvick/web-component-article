import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
  <fieldset>
    <legend>Personal Information</legend>
    <h3>Name: {{person.name}}</h3>
    <h3>Age: {{person.age}}</h3>
    <b>Address:</b>
    <address>{{person.address}}</address>
  </fieldset>
  `,
  styles: [
  ]
})
export class MyLibComponent implements OnInit {

  @Input() person: { name: string, age: number, address: string };
  @Output() loadComp = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
    if (typeof this.person === 'string') {
      try {
        this.person = JSON.parse(this.person);
      } catch (error) {
        console.error('Invalid playerConfig: ', error);
      }
    }


    setTimeout(() => {
      this.loadComp.emit('Component loaded successfully!');
    }, 100);
  }
}
