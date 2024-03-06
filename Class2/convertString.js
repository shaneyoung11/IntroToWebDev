let theVal; //for an undefined variable use the let assignmnet

// // Number to String
theVal = 55;
theVal = String(55);
theVal = String(55 - 11); //result of the new variable is 44

// // Boolean to String
theVal = String(true);
// // Date to String
theVal = String(new Date()); //converts the value of the variable to a date object which the result is the date of today.

// // Array to String
theVal = String([10, 20, 30, 40]);

// using the toString() function to do the same thing as above
theVal = (55).toString();
theVal = true.toString();
theVal = [8, 9, 10, 11].toString();

// tell us about theVal
console.log(theVal);
console.log(typeof theVal);
//console.log(theVal.length); //Length only works on string types
