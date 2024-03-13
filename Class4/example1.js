//question 1 - Template Strings
const salesFirstName = "John";
const salesLastName = "Smith";
const company = "Guillevin";
const currentSales = 51345.95;
const currentYear = 2024;
const hobbies = ["gaming", "anime", "walking", "shovelling snow"];
const address = "123 Robbery Highway";

salesString = `Meet ${salesFirstName} ${salesLastName}. He is one of the top sales reps at ${company}. So far, in ${currentYear}, ${salesFirstName}'s total sales are $${currentSales}. Even though ${salesFirstName} is very committed to his work, he has a variety of hobbies which inclide ${hobbies[0]}, ${hobbies[1]}, ${hobbies[2]}, and ${hobbies[3]}. `;

console.log(salesString);

//Question 2 - Arrays
const numArray = [2, 7, 4, 1, 0, 6, 33, 5, 7, 9, 6];
const numArray2 = [10.7, 6, 100.11, 0, 1, 5, 3, 77, 0.11];
const wordArray = ["dog", "cat", "turtle", "fish", "herring", "koi"];
const mixedArray = [
  1,
  "pig",
  100.1,
  [4, 5, 1, 9, 6, 3, 8],
  { name: "Shane", age: 31 },
];

console.log(numArray);
console.log(numArray2);
console.log(wordArray);
console.log(mixedArray);

//check length
val = wordArray.length;

//check if variable is an array
val = Array.isArray(numArray);

//getting values from array
val = wordArray[2]; //from a specific index
val = wordArray.slice(1, 3); //specific sections of the list using slice

//over writing values in a list
wordArray[2] = "Hello";
console.log(wordArray);

// finding the index of a value in the array
val = wordArray.indexOf("Hello");

//adding to end of a list
wordArray.push("Soft Kitty");

//adding to the start of the list
wordArray.unshift("Warm Kitty");

//take off rom the end of array
wordArray.pop();

//take off from the front array
wordArray.shift();

//take off from middle
wordArray.splice(2, 1); //specify the first index to remove and then how many after to remove

//reverse and array
wordArray.reverse();

//sort character based array
wordArray.sort();

//sort numbers array
numArray2.sort();

console.log(wordArray);
console.log(numArray2);
val = console.log(val);

// Question 3 - Objects
const invoiceForm = {
  fName: "Shane",
  lName: "Young",
  invAmt: 300.5,
  currentYear: 2024,
  shipToAdd: {
    //adding sub object
    street: "Hope Ave",
    streetNum: 123,
    city: "St Johns",
    prov: "NL",
    postalCode: "A1E1C5",
    country: "Canada",
  },
  productsPurchased: ["Batteries", "Smoke Alarm", "Breakers", "CO2 Detector"],
  getCurrentDate: function () {
    //adding a function
    const today = new Date();
    return today.getDate();
  },
};

console.log(invoiceForm);
