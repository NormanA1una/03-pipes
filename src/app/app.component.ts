import { Component } from '@angular/core';

export interface PeriodicElement {
  variable: any;
  pipe: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { variable: 'Capitan América', pipe: 'Uppercase' },
  { variable: 'Capitan América', pipe: 'Lowercase' },
  { variable: 'Capitan América', pipe: 'Slice:3' },
  { variable: 'Capitan América', pipe: 'Slice:0:3' },
  { variable: [1, 2, 3, 4, 5, 6, 7], pipe: 'Slice:1:5' },
  { variable: Math.PI, pipe: 'number:1.0-0' },
  { variable: Math.PI, pipe: 'number:.0-2' },
  { variable: 0.234, pipe: 'percent' },
  { variable: 0.234, pipe: 'percent:2.2-2' },
  { variable: 1234.5, pipe: 'currency' },
  { variable: 1234.5, pipe: 'currency:EUR' },
  { variable: 1234.5, pipe: 'currency:CAD:symbol:.0-0' },
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
