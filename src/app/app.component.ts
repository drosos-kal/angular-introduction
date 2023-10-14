import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent],
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
    givenName: 'Example',
    surName: 'xxx',
    age: 40,
    email: 'example@ex.com',
    address: 'Greece'
  }
}
