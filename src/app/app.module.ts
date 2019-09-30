import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SomarModule } from './somar/somar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SomarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
