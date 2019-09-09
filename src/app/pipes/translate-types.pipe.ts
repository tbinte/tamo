import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateTypes'
})
export class TranslateTypesPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    switch (value.toLowerCase()) {
      case 'fire':
        return 'Feuer';
      case 'water':
        return 'Wasser';
      default:
        return null;
    }
  }

}
