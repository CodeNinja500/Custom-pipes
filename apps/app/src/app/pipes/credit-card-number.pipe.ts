import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'creditCardNumber' })
export class CreditCardNumberPipe implements PipeTransform {
  transform(value: unknown): string {
    if (typeof value !== 'string')
      throw new Error('Incorrect input type. It must be a string.');
    else {
      const numbersJoined = Array.from(
        value.matchAll(/\d+/g),
        (m) => m[0]
      ).join('');
      if (numbersJoined.length != 16)
        throw new Error(`Invalid card number string: ${value}`);
      else {
        const result = numbersJoined.replace(
          /\d{4}/g,
          (substring: string) => `${substring} `
        );
        return result;
      }
    }
  }
}
