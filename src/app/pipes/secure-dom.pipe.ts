import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'secureDom',
})
export class SecureDomPipe implements PipeTransform {
  // tslint:disable-next-line: variable-name
  constructor(private _domSanitizer: DomSanitizer) {}
  transform(value: string): SafeResourceUrl {
    return this._domSanitizer.bypassSecurityTrustResourceUrl(value);
  }
}
