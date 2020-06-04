# Pencil Learning Technologies: Fall 2020 SWE Intern Assessment

This project is an assessment for the Fall 2020 SWE Intern role at Pencil Learning Technologies. It is an Angular application with the following components:

1. User authentication: Use Firebase to support authentication in your application, so that
the first screen a user sees, asks them to login via their google account. If the user is
detected to have been already authenticated, then directly take them to the 2nd page.
2. Text editor: Once logged in, show a large textbox on the page integrated with the
Medium editor (https://github.com/yabwe/medium-editor) and allow the user to write
content in this editor area.
3. Everything the user writes here, should be synced into the Firebase database in
real-time for that user’s account, automatically, without hitting a submit button.
4. When the user logs back in, retrieve their last written and auto-saved document and
show it in the editor ready for editing.
5. Host your project using Firebase hosting and send us a link, along with your code on
GitHub.

This project can be found 

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Deploy

Run `firebase deploy` to deploy the project to Firebase. Update the `.firebaserc` file, as well as the `firebaseConfig` variable in `app.module.ts` to ensure it is being deployed to the correct Firebase project. 

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Resources

The primary resources used to help build this project are [Google OAuth with @angular/fire](https://fireship.io/lessons/angularfire-google-oauth/) and [angular-medium-editor-example](https://stackblitz.com/edit/angular-medium-editor-example).