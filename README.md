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
```

ERROR: attempting to reassign a value to a constant... you are denied!

```js
var foo = 5;
if (foo > 3) {
  let bar = 2;
  foo = foo * bar;
}
console.log(foo);
console.log(bar);
```

ERROR: bar has function scope and cannot be accessed outside of the function block.

```js
const farge = {
  prop1: "one",
  prop2: "two",
  prop3: "three"
}
farge = {newProp: "new"};  // ERROR: you are not allow to assign a new property to an Object
farge.prop1 = "forty-two"; // ERROR: cannot reassign value because farge is a CONST (is not capitalized)
farge.propX = "ex";        // ERROR: propX is not defined
delete farge.propX;        // ERROR: propX does not exist
console.log(farge);
```

### Rewrite the following functions using arrow functions

```js
var adder = function(a, b) {
  return a + b;
}

// SOLUTION
adder = (a,b) => {
  return a + b;
}
```
```js
function printFarge() {
  console.log('farge');
}

// SOLUTION
printFarge = farge => {
  console.log('farge');
}
```
```js
var cleanTheString = function(str) {
  let newStr = str.replace(/\s/g, '');
  newStr = newStr.toUpperCase();
  return newStr;
}

// SOLUTION
cleanTheString = str => {
  let newStr = str.replace(/\s/g, '');
  newStr = newStr.toUpperCase();
  return  newStr;
}
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

// SOLUTION
var color = "blue";
var length = 14;
var style = "Flamenco";

var widget = {
  color,
  length,
  style
}
```

### Use String Literals to make the following code more readable

```js
var name = "Paco";
var location = "Nogales";
var food = "steak";

var bio = name + " is from " + location + " and really likes to eat " + food;

// SOLUTION
var bio =  `${name} is from ${location} and really likes to eat ${food}`;

```

### Use Array Spread syntax to concatenate two arrays

```js
var myArray = ['red', 'orange', 'yellow'];
var yourArray = ['green', 'blue', 'violet'];
// Finish the line below...
var ourArray = ;
```

### Use Array Spread syntax to unpack an array into function parameters

```js
var numbers = [5, 10, 15];

var addNumbers = function(a, b, c) {
  return a + b + c;
};

// Call the function below using array spread syntax to pass in the parameters
var result = addNumbers();
```

### Use the following Promise. Call it, then use the .then callback to print "Hello, " plus the Promise's return value when the Promise successfully completes

```js
var promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {resolve('Nick')}, 1000);
});

// Enter your code here...
```

### Use array destructuring to feed the given array's first 3 values into the given variables

```js
var hobbits = ['Pippin', 'Meriadoc', 'Frodo', 'Bilbo', 'Samwise'];
var theTook, theBrandybuck, theBaggins;

// Enter your code here...
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
import hello from './hello.js' //assuming in the same folder

hello("Siouxsie");
```
