import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'phoneNumber' })
export class PhoneNumberPipe implements PipeTransform {
  transform(value: string): string {
    const numbersWithoutCountryCode = value.match(/(\+48|0048)?((\d| |-)+)/)?.[2];

    const directionalNumbers =
      '12 13 14 15 16 17 18 22 23 24 25 29 32 33 34 41 42 43 44 46 48 52 54 55 56 58 59 61 62 63 65 67 68 71 74 75 76 77 81 82 83 84 85 86 87 89 91 94 95';

    if (numbersWithoutCountryCode) {
      const numberWithoutSigns = numbersWithoutCountryCode.replace(/[ -]+/g, '');
      if (numberWithoutSigns.length != 9) {
        //invalid number
        throw new Error('Invalid Phone Number');
      } else {
        const possibleDirectionalCode = numberWithoutSigns.slice(0, 2);
        if (directionalNumbers.includes(possibleDirectionalCode)) {
          //landline number
          const result = numberWithoutSigns
            .replace(possibleDirectionalCode, `+48 (${possibleDirectionalCode}) `)
            .replace(/\d{4}$/, (match) => ` ${match}`)
            .replace(/\d{2}$/, (match) => ` ${match}`);
          return result;
        } else {
          //mobile phone number
          return `+48 ${numberWithoutSigns.replace(/\d{3}/g, (match) => `${match} `)}`;
        }
      }
    } else {
      //invalid number
      throw new Error('Invalid Phone Number');
    }
  }
}
