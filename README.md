# sass-calc

!['sass calc'](sass-calc.png)

[![npm published v](https://img.shields.io/npm/v/@lunelson/sass-calc.svg)]()
[![Build Status](https://travis-ci.org/lunelson/sass-calc.svg?branch=master)](https://travis-ci.org/lunelson/sass-calc)

Harness the power of CSS `calc()` expressions in Sass math.

Use `add()`, `subtract()`, `multiply()` and `divide()` on values which may have incompatible units, or which are `calc()` expressions themselves, and return a `calc()` expression as a result.

```sh
# in your project
npm install --save @lunelson/sass-calc
```
```scss
// in your sass file, assuming you have 'node_modules' in Sass' search path
@import '@lunelson/sass-calc/index';
```
```scss
// test.scss
$expr: calc(100vw - 50%);
.test {
  test: subtract(1.5em, 1em);
  test: add(1.5em, 1rem);
  test: add(multiply($expr, 2), 10px);
  test: divide(subtract(1.5em, 1em), 2);
  test: subtract(divide(subtract(1.5em, 1em), 2), add(1em, 1ex));
}
```
```css
/* test.css */
.test {
  test: 0.5em;
  test: calc(1.5em + 1rem);
  test: calc(((100vw - 50%) * 2) + 10px);
  test: 0.25em;
  test: calc(0.25em - (1em + 1ex));
}
```

Refs:

- https://www.sitepoint.com/sass-basics-operators/
- https://www.sitepoint.com/understanding-sass-us/
- http://caniuse.com/#feat=calc

Questions? [Twitter.](https://twitter.com/lunelson)
