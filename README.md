# Angular Firestore album app

## Uses Angular7, Firestore, Bulma CSS, authentication with email/password

### [Live Demo with surge](http://ang-fs-auth-albums.surge.sh/)

### [Live Demo with gh-pages](https://rkloecker.github.io/ang-fs-auth-albums/)

### authentication (auth.guards, service, notification, login, register user) according to codediodeio/angular-firestarter https://github.com/codediodeio/angular-firestarter

### Deployment using gh-pages and angular-cli-ghpages
*either globally install angular-cli-ghpages or use npx*

**npm i -g angular-cli-ghpages**

**ng build --prod --base-href `https://username.github.io/reponame/`**
  
*when using angular router make sure to change the 'base href' in the index.html file in the dist folder*

**base href="/reponame/"**
  
*With Angular CLI 6 the build artifacts are located in a dist subfolder specified under "outputPath" in the angular.json file*

**ngh --dir=dist/name-of-subfolder**



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
