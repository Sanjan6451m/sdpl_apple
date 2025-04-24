import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-macbook-pro',
  templateUrl: './macbook-pro.component.html',
  styleUrls: ['./macbook-pro.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class MacbookProComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    // Initialize any necessary functionality
  }
}
