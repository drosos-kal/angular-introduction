import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from './interfaces/person';

import { PersonComponent } from './person/person.component';
import { PersonAltComponent } from './person-alt/person-alt.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent, PersonAltComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Drosos";
  lastName = "Kalyvas";

  person: Person = {
    givenName: 'Drosos',
    surName: 'Kalyvas',
    age: 31,
    email: 'drososkal@gmail.com',
    address: 'Athens, Greece'
  }

  person2: Person = {
    givenName: 'Giorgos',
    surName: 'Chatzis',
    age: 22,
    email: 'gchatz@aueb.com',
    address: 'Athens, Greece'
  }

  
  
}
