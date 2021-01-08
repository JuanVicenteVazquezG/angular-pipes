import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  name = 'Captain America';
  Array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  PI: number = Math.PI;
  percentage = 0.234;
  salary = 1234.5;

  hero = {
    name: 'Logan',
    key: 'Wolverine',
    age: 500,
    address: {
      street: 'First',
      house: 20,
    },
  };
}
