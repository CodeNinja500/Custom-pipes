import { Inject, Pipe, PipeTransform } from '@angular/core';
import { PLACEHOLDER_IMAGE_SOURCE } from './placeholderImg-pipe-config';

@Pipe({ name: 'placeholderImg' })
export class PlaceholderImgPipe implements PipeTransform {
  constructor(@Inject(PLACEHOLDER_IMAGE_SOURCE) private _config: string) {}
  transform(value: string | null): string {
    if (value) {
      return value;
    } else {
      return this._config;
    }
  }
}
