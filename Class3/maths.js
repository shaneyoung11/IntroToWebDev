const numb1 = 100;
const numb2 = 60;
let val;

// simple math
val = numb1 + numb2;
val = numb1 - numb2;
val = numb1 * numb2;
val = numb1 / numb2;
val = numb1 % numb2; // modulus

// // Math Object
val = Math.PI; //returns the PI numbers
val = Math.E; // returns Eulers number

//helpful methods in Math
val = Math.round(3.48); // does standard rounding
val = Math.ceil(3.98); // rounds up to the nearest int
val = Math.floor(3.98); // rounds down to the nearest int
val = Math.sqrt(49); //square root
val = Math.abs(-9); // returns the absolute value (no negative values)
val = Math.pow(2, 4); // returns the powers of number (number, to the power of number)
val = Math.min(3, 5, 56, 43, 129, 16, 87, 12, 1); //returns the min of the values passed in
val = Math.max(3, 5, 56, 43, 129, 16, 87, 12, 1); // returns the max of the values passed in

//Random numbers in math
val = Math.random();

// using random to get a whole integer
val = Math.random() * 10; // or the max number we want
val = Math.floor(Math.random() * 10 + 1); // this gives you a number between 1 and 10

console.log(val);
