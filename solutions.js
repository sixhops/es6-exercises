// 1. Modify the following code to use var, const, and let appropriately. Replace the underlines with either 'var', 'const', or 'let'

const SPEED_OF_LIGHT = 299792458

const speedArray = [55, 9.8, 1000000000, 186300]

for (let i = 0; i < speedArray.length; i++) {
  if (speedArray[i] > SPEED_OF_LIGHT) {
    console.log("Faster than light")
  } else {
    console.log("Sub-light speed")
  }
}



// 2. What errors will the following code blocks produce? Why?

// This will produce a SyntaxError because constants cannot be reassigned
const foo = 5;
foo = 6;

// This will produce a ReferenceError because bar is scoped to the if block
var foo = 5;
if (foo > 3) {
  let bar = 2;
  foo = foo * bar;
}
console.log(foo);
console.log(bar);
 
const farge = {
  prop1: "one",
  prop2: "two",
  prop3: "three"
}
farge = {newProp: "new"};  // SyntaxError. farge cannot be reassigned.
farge.prop1 = "forty-two"; // No error! 
farge.propX = "ex";        // No error!
delete farge.propX;        // No error!
console.log(farge);



// 3. Rewrite the following functions using arrow functions

var adder = (a, b) => return a + b;

var printFarge = () => console.log('farge');

var cleanTheString = (str) => str.replace(/\s/g, '').toUpperCase();


// 4. Use Object Literal shorthand to clean up the following code

var color = "blue";
var length = 14;
var style = "Flamenco";

var widget = { color, length, style };


// 5. Use String Literals to make the following code more readable

var name = "Paco";
var location = "Nogales";
var food = "steak";

var bio = `${name} is from ${location} and really likes to eat ${food}`


// 6. The blocks below represent two separate files. Write out the statements needed to use the function from the first file in the code in the second file

// This is in hello.js
var hello = function(name) {
  console.log(`Hello, ${name}!`);
}

export hello;

// This is in main.js
import hello from './hello'
hello("Siouxsie");

