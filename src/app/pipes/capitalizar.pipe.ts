import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar',
})
export class CapitalizarPipe implements PipeTransform {
  transform(value: string, todas: boolean = true): string {
    value = value.toLowerCase();
    let nombres = value.split(' ');

    if (todas) {
      nombres = nombres.map((nombre) => {
        return nombre[0].toUpperCase() + nombre.substring(1);
      });
    } else {
      nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substring(1);
    }

    return nombres.join(' ');
  }
}
