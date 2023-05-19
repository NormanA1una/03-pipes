import { Component } from '@angular/core';

export interface PeriodicElement {
  variable: string;
  pipe: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { variable: 'Capitan América', pipe: 'Uppercase' },
  { variable: 'Capitan América', pipe: 'Lowercase' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre = 'Capitan America';

  displayedColumns: string[] = ['variable', 'pipe', 'salida'];
  dataSource = ELEMENT_DATA;
}
