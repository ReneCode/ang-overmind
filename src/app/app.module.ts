import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import {
  OvermindModule,
  OvermindService,
  OVERMIND_INSTANCE
} from "overmind-angular";
import { createOvermind } from "overmind";
import { config, Store } from "./overmind";

import { AppComponent } from './app.component';
import { setServiceInjector } from './util/ServiceInjector';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: OVERMIND_INSTANCE, useValue: createOvermind(config) },
    { provide: Store, useExisting: OvermindService }
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    setServiceInjector(injector);
  }
}