# es6-exercises

### Modify the following code to use var, const, and let appropriately. Replace the underlines with either 'var', 'const', or 'let'

```js
const SPEED_OF_LIGHT = 299792458

var speedArray = [55, 9.8, 1000000000, 186300]

for (let i = 0; i < speedArray.length; i++) {
  if (speedArray[i] > SPEED_OF_LIGHT) {
    console.log("Faster than light")
  } else {
    console.log("Sub-light speed")
  }
}
```

### What errors will the following code blocks produce? Why?

```js
const foo = 5;
foo = 6;
// ANSWER \\//
// you cannot reassaign the value of a const variable
// //\\
```
```js
var foo = 5;
if (foo > 3) {
  let bar = 2;
  foo = foo * bar;
}
console.log(foo);
console.log(bar);
// ANSWER \\//
// let is block scope so it cannot be read on the global level
// //\\
```
```js
const farge = {
  prop1: "one",
  prop2: "two",
  prop3: "three"
}
farge = {newProp: "new"};  // Error? ~~~ NO ERROR
farge.prop1 = "forty-two"; // Error? ~~~ NO ERROR
farge.propX = "ex";        // Error? ~~~ NO ERROR
delete farge.propX;        // Error? ~~~ NO ERROR
console.log(farge);
```

### Rewrite the following functions using arrow functions

```js
var adder = function(a, b) {
  return a + b;
}
// ANSWER \\//
adder (a, b) => a + b;
// //\\
```
```js
function printFarge() {
  console.log('farge');
}
// ANSWER \\//
printFarge () => console.log('farge');
// //\\
```
```js
var cleanTheString = function(str) {
  let newStr = str.replace(/\s/g, '');
  newStr = newStr.toUpperCase();
  return newStr;
}
// ANSWER \\//
cleanTheString str => {
  let newStr = str.replace(/\s/g, '');
  newStr = newStr.toUpperCase();
  return newStr;
}
// //\\
```

### Use Object Literal shorthand to clean up the following code

```js
var color = "blue";
var length = 14;
var style = "Flamenco";

var widget = {
  color: color,
  length: length,
  style: style
}
// ANSWER \\//
var color = "blue";
var length = 14;
var style = "Flamenco";

var widget = {
  color,
  length,
  style
}
// //\\
```

### Use String Literals to make the following code more readable

```js
var name = "Paco";
var location = "Nogales";
var food = "steak";

var bio = name + " is from " + location + " and really likes to eat " + food;
// ANSWER \\//
var name = "Paco";
var location = "Nogales";
var food = "steak";

var bio = `${name} is from ${location} and realy likes to eat ${food}`;
// //\\
```

### The blocks below represent two separate files. Write out the statements needed to use the function from the first file in the code in the second file

```js
// This is in hello.js
var hello = function(name) {
  console.log(`Hello, ${name}!`);
}
// Add your code here...
export default hello;

```
```js
// This is in main.js
// Add your code here...
import hello from './hello';

hello("Siouxsie");
```
