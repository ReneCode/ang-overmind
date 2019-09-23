import { IConfig } from "overmind";
import { Injectable } from "@angular/core";
import { OvermindService } from "overmind-angular";
import { state } from "./state";
import * as actions from "./actions";

export const config = { state, actions };


// this is necessary to startup with overmind

// @ts-ignore
if (!window.process) {
  // @ts-ignore
  window.process = null;
}

declare module "overmind" {
  interface Config extends IConfig<typeof config> {}
}

@Injectable({
  providedIn: "root"
})
export class Store extends OvermindService<typeof config> {}
