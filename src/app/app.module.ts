import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';
import { AppComponent } from './app.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SecureDomPipe } from './pipes/secure-dom.pipe';

registerLocaleData(localEs);
registerLocaleData(localFr);
@NgModule({
  declarations: [AppComponent, CapitalizePipe, SecureDomPipe],
  imports: [BrowserModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
