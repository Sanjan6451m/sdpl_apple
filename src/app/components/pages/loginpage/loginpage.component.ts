import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.scss'
})

export class LoginpageComponent {
  showInfo = false;
  infoMessage = 'Thank you! You will be notified.';

  onNotify(event: Event) {
    event.preventDefault();
    this.showInfo = true;
    setTimeout(() => {
      this.showInfo = false;
    }, 3000);
  }
}
