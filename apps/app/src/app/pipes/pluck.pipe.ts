import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pluck', pure: false })
export class PluckPipe implements PipeTransform {
  transform(value: Record<string, unknown>, propToPluck: string): unknown {
    return value[propToPluck];
  }
}
