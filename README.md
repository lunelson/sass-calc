## Sass Calc

!['sass calc'](sass-calc.png)

[![Build Status](https://travis-ci.org/lunelson/sass-calc.svg?branch=master)](https://travis-ci.org/lunelson/sass-calc)

**Sass-Calc** is a collection of functions which augment math in Sass through use of CSS `calc()`. While Sass supports math operations on CSS values, it only works with compatible units (references [here](https://www.sitepoint.com/sass-basics-operators/) and [here](https://www.sitepoint.com/understanding-sass-units/)); but `calc()` expressions are evaluated at runtime and so can operate on mixed units. They can be nested to create complex values, and their [Browser support is very good](http://caniuse.com/#feat=calc).

```scss
// test.scss
.hello-world {
  test: subtract(1.5em, 1em);
  test: subtract(1.5em, 1rem);
  test: divide(subtract(1.5em, 1em), 2);
  test: subtract(divide(subtract(1.5em, 1em), 2), add(1em, 1ex));
}
```
```css
/* test.css */
.hello-world {
  test: 0.5em;
  test: calc(1.5em - 1rem);
  test: 0.25em;
  test: calc(0.25em - (1em + 1ex));
}
```

`add()`, `subtract()`, `multiply()` and `divide()` are described below. They will employ Sass math if given compatible inputs; but given complex inputs (including other `calc()` expressions), will output an unquoted `calc()` expression string.

### `add([number|calc], [number|calc])`
```scss
// examples to come
```
### `subtract([number|calc], [number|calc])`
```scss
// examples to come
```
### `multiply([number|calc], [number])`
```scss
// examples to come
```
### `divide([number|calc], [number])`
```scss
// examples to come
```

### Install

This is not currently registered in any package directories but can be installed from github via `npm`, and imported in [node-sass](https://github.com/sass/node-sass) and compliant tools, as long as the `includePaths` option includes `'node_modules'`.

```sh
# in your project directory
npm install --save lunelson/sass-calc
```
```scss
// in your sass file
@import 'sass-calc/index';
```
#### Get in touch

[Ping me on twitter.](https://twitter.com/lunelson)

#### TODO

- [ ] document and bung to gh-pages
  http://sassdoc.com/

- [ ] finish writing tests for main functions
  http://oddbird.net/true/
