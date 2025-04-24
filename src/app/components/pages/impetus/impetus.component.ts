import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-impetus',
  standalone: true,
  imports: [],
  templateUrl: './impetus.component.html',
  styleUrl: './impetus.component.scss'
})
export class ImpetusComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    document.head.appendChild(link);
  }

  navigateToHome(): void {
    this.router.navigate(['/']);
  }
}
