import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Drosos";
  lastName = "Kalyvas";

  person = {
    givenName: "Drosos",
    surName: "Kalyvas",
    age: 31,
    email: "drososkal@gmail.com"
  }
}
