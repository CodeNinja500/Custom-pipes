import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {
  transform(value: string, search: string): string[] {
    const wordsArray = Array.from(value.matchAll(/\w+/g), (m) => m[0]);
    const matchingWords = wordsArray.filter((word) =>
      word.toLowerCase().includes(search.toLowerCase())
    );
    if (matchingWords.length == 0) {
      throw new Error('No Result');
    } else {
      return matchingWords;
    }
  }
}
