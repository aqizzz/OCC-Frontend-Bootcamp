// Functions - Set of instructions

function greet() {
  console.log("Instruction # 1")
  console.log("Instruction # 2")
  console.log("Instruction # 3")
  console.log("Merry Christmas!")
};
greet();

// Function Hoisting

// 1. Function Declaration
functionDeclaration();

function functionDeclaration () {
  console.log("Hello World! I am a function declaration");
}


// 2. Function Expression

const functionExpression = function() {
  console.log("Hello universe! I am a funtion expression");
}

functionExpression();

// Function expressions - flexible and great for dynamic situations
// Function declarations - reliable and hoisted for easy use

// Function with parameters

function greet(name) { //variable - parameter / argument - value
  console.log("Hello", name)
}

greet('Gab');

// Function with a return value

function sum(a, b) {
  return a + b;
  console.log("Hello");
}

console.log("Sum:", sum(10, 5));