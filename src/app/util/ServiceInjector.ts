import { Injector } from "@angular/core";

export let ServiceInjector: Injector;

export const setServiceInjector = (injector: Injector) => {
  ServiceInjector = injector;
};
