let theVal1;

// String to Number
theVal1 = Number("56");
theVal1 = Number(true);
theVal1 = Number(false);
theVal1 = Number(null);
// theVal = Number('hello'); // NaN
theVal = Number([1, 2, 3]); // NaN

theVal = parseInt("100.9999");
theVal = parseFloat("100.342");

// tell us about theVal
console.log(theVal);
console.log(typeof theVal);
console.log(theVal.toFixed(2));

// Type Coercion
const val1 = Number("hello");
const val2 = 6;
const val3 = 10;
const sum2 = val1 + val2 + val3;
const sum = Number(val2 + val1 + val3);

console.log(sum2);
console.log(Number(sum2));
console.log(typeof sum);

// // A string and a number as a string
// theVal = "a string";
// theVal = Number(true); //output is 1
// theVal = Number(false); //output is 0
// theVal = Number(null); //output is 0
// theVal = Number("Hello"); // output is NaN -- Stands for Not a Number
// theVal = Number([1, 2, 3]); //output is Nan

// theVal = parseInt("100"); //praseInt changes the data type that is passed in to a number.
// theVal = parseInt("100.00"); // will return a whole number because it is a integer

// theVal = parseFloat("103.33"); //output will be 103.33 as a float

// //Type cohersion is when you concatonate to different variables together, the end result may become one type

// const val1 = "Hello";
// const val2 = 10;
// const sum = val1 + val2;
// console.log(sum); //the output will be Hello10
// console.log(typeof sum);

// // theVal = 57 + 90;
