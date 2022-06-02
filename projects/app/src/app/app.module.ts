import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NpxStorageModule } from 'npx-storage';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NpxStorageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
