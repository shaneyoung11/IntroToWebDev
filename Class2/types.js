// PRIMATIVE TYPES - Stored directly in the location the variable accesses. Stored on the stack.

// String
const fullName = "Santa Claus";

console.log(typeof fullName);
// // Number
const aNumber = 96;

console.log(typeof aNumber);

// Boolean
const isTrue = true;
console.log(typeof isTrue);

// Null
const isNull = null;
console.log(typeof isNull);

// Undefined
let isUndefined;
console.log(typeof isUndefined);

// Symbol
const aSymbol = Symbol();
console.log(typeof aSymbol);

// // REFERENCE TYPES -- Accessed by reference, objects that are stored on the heap, a pointer to a location in memory.

// Arrays
const instruments = ["bass", "tenor banjo", "ukelele", "guitar"];
console.log(typeof instruments);

// Objects
const person = {
  firstName: "Bob",
  lastName: "Bobson",
  city: "Bobville",
  age: 35,
};
console.log(typeof person);

// Dates
const today = new Date();
console.log(today);
console.log(typeof today);

// Javascript is a dynamically typed language, like Python, and data types are assocaited with values, not the variables
// The same variable can hold multiple data types
// We do not need to specify types
// Most other languages are statically typed (Java, C#, C++)
// There are supersets of JS and addons to allow static typing
