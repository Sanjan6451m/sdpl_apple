import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mac-mini',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './mac-mini.component.html',
  styleUrl: './mac-mini.component.scss'
})
export class MacMiniComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
