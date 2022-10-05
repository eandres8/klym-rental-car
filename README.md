# KlymRentalCar

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


### TODO
[X] pipe to filter vehicle-cards subscribing with store
    [X] create Pipe
    [X] add subscription to read input text filter
[X] create loader component
[ ] load data from JSON file
[ ] ordered data by brand
[X] directive to catch error with no image found
[ ] create Empty component, when filter doesn't made match
[ ] create details page
    [ ] make basic structure
    [ ] get param from url and search the car on store
    [ ] render Data
    [ ] filter state by id with action
[X] create Backend to make request
    [X] create a mock request from of observable
[ ] fix all responsive styles
    [ ] fix styles to search input