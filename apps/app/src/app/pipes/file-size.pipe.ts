import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'fileSize' })
export class FileSizePipe implements PipeTransform {
  transform(value: number): string {
    const sufixes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
    let power = 0;
    for (let i = 0; Math.pow(1024, i) <= value; i++) {
      power = i;
    }
    const result = value / Math.pow(1024, power);

    return `${result} ${sufixes[power]}`;
  }
}
