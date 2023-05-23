import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safepassword',
})
export class SafepasswordPipe implements PipeTransform {
  transform(value: string, mostrar: boolean): string {
    console.log(value);

    //forma del Curso:
    /*     mostrar ? '*'.repeat(value.length) : value; */

    //forma mia
    if (mostrar) {
      return value.replace(/./g, '*');
    } else {
      value;
    }

    return value;
  }
}
