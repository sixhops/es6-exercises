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

### this is attempting to set a new value to a constant. constants are not mutable.
### instead, use let or var to set a new value
```js
const foo = 5;
foo = 6;
```
### the second console.log is attempting to view a variable inside a inner function.
### the variable let bar is not available globally, ONLY within that inner function.
```js
var foo = 5;
if (foo > 3) {
  let bar = 2;
  foo = foo * bar;
}
console.log(foo);
console.log(bar);
```

```js
const farge = {
  prop1: "one",
  prop2: "two",
  prop3: "three"
}
//newProp is not a valid property. instead, callan existing property like prop1, prop2 or prop3.
farge = {newProp: "new"};  
// this should work correctly and set the value as a "forty-two"
farge.prop1 = "forty-two";
//this will work it's adding a new property
farge.propX = "ex";      
//this will work since we just added this new property
delete farge.propX;      
console.log(farge);
```

### Rewrite the following functions using arrow functions

```js
//original code
var adder = function(a, b) {
  return a + b;
}

//new code
adder = (a,b) => a + b

```
```js
//original code
function printFarge() {
  console.log('farge');
}

//new code
printFarge = () => console.log('farge')


```
```js
//original code
var cleanTheString = function(str) {
  let newStr = str.replace(/\s/g, '');
  newStr = newStr.toUpperCase();
  return newStr;
}

//new code
cleanTheString = (str) => {
  let newStr = str.replace(/\s/g, '');
  newStr = newStr.toUpperCase();
  return newStr;
}

```

### Use Object Literal shorthand to clean up the following code

```js
//original code
var color = "blue";
var length = 14;
var style = "Flamenco";

var widget = {
  color: color,
  length: length,
  style: style
}

//new code
var color = "blue";
var length = 14;
var style = "Flamenco";

var widget = {
  color: color,
  length: length,
  style: style
}
```

### Use String Literals to make the following code more readable

```js
//original code
var name = "Paco";
var location = "Nogales";
var food = "steak";

var bio = name + " is from " + location + " and really likes to eat " + food;

//new code
var name = "Paco";
var location = "Nogales";
var food = "steak";

var bio = `${name} " is from " ${location} " and really likes to eat " ${food};`
```

### The blocks below represent two separate files. Write out the statements needed to use the function from the first file in the code in the second file

```js
// This is in hello.js
var hello = function(name) {
  console.log(`Hello, ${name}!`);
}

export default hello;

```
```js
import hello from './hello';
// This is in main.js
// Add your code here...

hello("Siouxsie");
```
