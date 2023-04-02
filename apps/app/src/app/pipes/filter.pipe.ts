import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  transform(
    value: unknown[],
    criterion: ((param: unknown) => boolean) | undefined
  ): unknown[] {
    return criterion ? value.filter((val) => criterion(val)) : value;
  }
}
