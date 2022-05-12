# NotesFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.2.

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


<!-- # Express: Note Taker

## Description

Create an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

## Requirements

- [x] You’ll have some boilerplate HTML/CSS and store to read/write JSON file, it's your job to build the backend and connect the two. Download file [NoteTaker.zip](https://drive.google.com/file/d/19pMYYKzGX1J8Gc8nlQx7ZVZxIFYUIUBo/view?usp=sharing). Remember to run app with `node server.js` for backend functionality

- [x] The following HTML routes should be created:

  - [x] GET `/notes` - Should return the `notes.html` file.

  - [x] GET `*` - Should return the `index.html` file

- [ ] The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

- [ ] The following API routes should be created:

  - [ ] GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  - [ ] POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  - [ ] DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

## User Story

```
AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Business Context

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

## Acceptance Criteria

- [ ] Application should allow users to create and save notes.

- [ ] Application should allow users to view previously saved notes.

- [ ] Application should allow users to delete previously saved notes. -->

[Learn how to use Font Awesome icons in Angular](https://www.angularjswiki.com/angular/how-to-use-font-awesome-icons-in-angular-applications/)
