import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  transform(value: string): string {
    const capitalized = (_: string): string =>
      _[0].toUpperCase() + _.substring(1).toLowerCase();
    return value.split(' ').map(capitalized).join(' ');
  }
}
