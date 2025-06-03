import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-devpowerhouse',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './devpowerhouse.component.html',
  styleUrl: './devpowerhouse.component.scss'
})
export class DevpowerhouseComponent implements OnInit{

  constructor(private router: Router) { }
  
  ngOnInit(): void {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css';
    document.head.appendChild(link);
  }

}
