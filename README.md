# Angular and overmind

src/app/overmind/index.ts:

    // @ts-ignore
    if (!window.process) {
    // @ts-ignore
       window.process = null;
    }

start the app with

    npm install
    npm start
    localhost://4200

remove that code and the app will not start, but there is an error 

    "Uncaught ReferenceError: process is not defined"


(This happens on an windows-10 System)

-------------------------

# AngOvermind

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

