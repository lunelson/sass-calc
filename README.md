## Sass Calc

!['sass calc'](sass-calc.png)

**Sass-Calc** is a collection of functions which augment math in Sass through use of CSS `calc()`. While Sass supports math operations on CSS values, it only works with *compatible* units (since the true dimensions of a `rem`, `em`, `%`, `vw` etc. are not known until runtime); but CSS `calc()` expressions are *evaluated at runtime* and so can operate on mixed units, e.g. `100vw - 50%`, `(2rem - 1ex) / 2` etc.

 enables otherwise impossible calculations, such as when input-values of different units are supplied. [Browser support is very good](http://caniuse.com/#feat=calc).

The functions will use Sass operations wherever possible, in order to (a) handle expressions that are invalid in CSS `calc()`, such as adding or subtracting unitless numbers, and (b) to simplify the resulting expressions.

### `add([number|calc], [number|calc])`
```scss
// each argument can be either a number or a calc expression
```
### `subtract([number|calc], [number|calc])`
```scss
// each argument can be either a number or a calc expression
```
### `multiply([number|calc], [number])`
```scss
// each argument can be either a number or a calc expression
```
### `divide([number|calc], [number])`
```scss
// each argument can be either a number or a calc expression
```

They will produce a simple output value if possible; otherwise they output an unquoted `calc` expression string. They also accept calc expressions as input, allowing the building of complex runtime CSS values.

### Installation

This is not currently registered in any package directories but can be installed from github via `npm`, and imported in [node-sass](https://github.com/sass/node-sass) and compliant tools, as long as the `includePaths` option includes `'node_modules'`.

```sh
# in your project directory
npm install --save lunelson/sass-calc
```
```scss
// in your sass file
@import 'sass-calc/index';
```
#### Contribution / Support

[Hit me up on twitter.]()

```scss
.hello-world {
  test: subtract(1.5em, 1em);
  test: subtract(1.5em, 1rem);
  test: divide(subtract(1.5em, 1em), 2);
  test: subtract(divide(subtract(1.5em, 1em), 2), add(1em, 1ex));
}
```
```css
.hello-world {
  test: 0.5em;
  test: calc(1.5em - 1rem);
  test: 0.25em;
  test: calc(0.25em - (1em + 1ex));
}
```
