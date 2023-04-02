import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'teaser' })
export class TeaserPipe implements PipeTransform {
  transform(value: string, maxWords: number): string {
    const wordCount = value.match(/\b\w+\b/g)?.length;

    const pattern = new RegExp(`(\\b\\w+\\b\\W+){${maxWords}}`);

    if (!wordCount || wordCount <= maxWords) {
      return value;
    }
    if (wordCount && wordCount > maxWords && value.match(pattern)?.[0]) {
      return `${value.match(pattern)?.[0]}...`;
    } else {
      return 'error';
    }
  }
}
