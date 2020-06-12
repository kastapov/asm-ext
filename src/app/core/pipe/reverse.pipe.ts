import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'reverseOrder' })
export class ReversePipe implements PipeTransform {
  transform(value) {
    return value?.slice().reverse();
  }
}
