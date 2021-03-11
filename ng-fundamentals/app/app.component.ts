import { Component } from '@angular/core';
import { Passenger } from './passenger.interface';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  passengers: Passenger[] = [
    {
      id: 1,
      fullName: 'Farooq Mahmud',
      checkedIn: true,
      children: [ 
        {
          name: 'Yasin',
          age: 11
        },
      {
        name: 'Noor',
        age: 14
      }]
    },
    {
      id: 2,
      fullName: 'Emily Green',
      checkedIn: false,
      children: [
        {
          name: 'Andrew',
          age: 13
        }
      ]
    },
    {
      id: 3,
      fullName: 'Sofia Mahmud',
      checkedIn: true,
      children: null
    }
  ];

  title: string = 'Passengers';

  constructor() {
    
  }
}
