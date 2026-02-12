import { Component } from '@angular/core';

@Component({
  selector: 'app-new-home',
  standalone: true,
  imports: [],
  templateUrl: './new-home.component.html',
  styleUrl: './new-home.component.scss'
})
export class NewHomeComponent {
  /** Background image for the hero section. Set to your image path in assets. */
  backgroundImage = 'assets/images/newHomePage/hero_bg.png';
  /** Circular hero image (team/collaboration). Set to your image path in assets. */
  // heroImage = 'assets/images/newHomePage/frame37.png';
}
