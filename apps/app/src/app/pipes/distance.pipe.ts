import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'distance' })
export class DistancePipe implements PipeTransform {
  transform(value: number | string): string {
    return +value > 750
      ? `${+(+value / 1000).toFixed(2)} km`
      : `${+(+value).toFixed(2)} m`;
  }
}
