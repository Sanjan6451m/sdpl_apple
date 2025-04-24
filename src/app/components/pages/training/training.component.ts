import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  // standalone: true,
  // imports: [],
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss'
})
export class TrainingComponent implements OnInit {

  constructor() { }

    ngOnInit(): void {}
    
    // Tabs
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }
}
