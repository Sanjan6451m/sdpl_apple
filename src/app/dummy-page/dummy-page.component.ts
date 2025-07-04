import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dummy-page',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './dummy-page.component.html',
  styleUrls: ['./dummy-page.component.scss']
})

export class DummyPageComponent{

}
