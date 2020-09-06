# Guylianize
A simple css 'framework'. It's basically a default set of styling and some components that makes it easier to create design heavy websites.

## How to build
First of all, make sure that you have NPM version 6.13.7 (or higher) installed. Once you can use NPM, type the following command:

```bash
$ npm install
```

This command will install the following packages:
- gulp
- gulp-rename
- gulp-sass
- node-sass

To compile the scss files that are located within the `./src` folder, run this command:

```bash
$ npm run build
```

To compile when there are changes noticed, run the this command:

```bash
$ npm run watch
```