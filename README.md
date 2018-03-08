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
const cannot be changed once it is declared, so reassigning foo to a value of 6 will error out.

```js
var foo = 5;
if (foo > 3) {
  let bar = 2;
  foo = foo * bar;
}
console.log(foo);
console.log(bar);
```
bar is only defined within the code block of the if statement, so console logging bar outside the code block will throw an error. Function closure causes bar to be unavailable at the console.log.


```js
const farge = {
  prop1: "one",
  prop2: "two",
  prop3: "three"
}
farge = {newProp: "new"};  // You can't replace the whole object since farge was stated in a const
farge.prop1 = "forty-two"; // no error
farge.propX = "ex";        // no error, adds key:value pair to the farge object
delete farge.propX;        // no error, removes the propx key:value pair from the object
console.log(farge);        
```

### Rewrite the following functions using arrow functions

```js
var adder = function(a, b) {
  return a + b;
}
```
var adder = (a, b) => a + b;


```js
function printFarge() {
  console.log('farge');
}
```
printFarge = () => console.log('farge');


```js
var cleanTheString = function(str) {
  let newStr = str.replace(/\s/g, '');
  newStr = newStr.toUpperCase();
  return newStr;
}

```
var cleanTheString = str => { let newStr = str.replace(/\s/g, ''); newStr = newStr.toUpperCase(); return newStr; }



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
```

var widget = {
  color,
  length,
  style
}

### Use String Literals to make the following code more readable

```js
var name = "Paco";
var location = "Nogales";
var food = "steak";

var bio = name + " is from " + location + " and really likes to eat " + food;
```
var bio = `${name} is from ${location} and really likes to eat ${food}`;


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
