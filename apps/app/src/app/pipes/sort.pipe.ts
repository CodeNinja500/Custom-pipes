import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sort' })
export class SortPipe implements PipeTransform {
  transform(value: string[] | null, sortDirection?: string): string[] | null {
    const dir = sortDirection ?? 'asc';
    if (!value) return value;
    else {
      return value.sort((a, b) => {
        if (a > b) {
          return dir === 'asc' ? 1 : -1;
        }
        if (a <= b) {
          return dir === 'asc' ? -1 : 1;
        }
        return 0;
      });
    }
  }
}
