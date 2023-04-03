import { Inject, Pipe, PipeTransform } from '@angular/core';
import { TRANSLATION } from './translater-pipe-config';

@Pipe({ name: 'translate' })
export class TranslatePipe implements PipeTransform {
  constructor(@Inject(TRANSLATION) private _translation: Record<string, Record<string, string>>) {}
  transform(value: string, language: string): unknown {
    return this._translation[language][value];
  }
}
