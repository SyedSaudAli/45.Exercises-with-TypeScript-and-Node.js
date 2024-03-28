"use strict";
let string1 = 'Pakistan';
let string2 = 'Pakistan';
// Test 1 : equality and inequality with strings
console.log('\n 1 .Tests for equality and inequality with strings');
console.log(string1 == string2); // Eqality is True
console.log(string1 != string2); // InEqality is False
// Test 2 : using the lower case function
string1.toLowerCase;
console.log('\n 2 .Tests using the lower case function');
console.log(string1 == string2); // not equal is False
console.log(string1 != string2); // InEqality is False
// Test 3 : Numerical tests
let num1 = 5;
let num2 = 10;
console.log('\n 3 .Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to');
console.log(num1 == num2); //equality
console.log(num1 != num2); //inequality
console.log(num1 > num2); // greater than
console.log(num1 < num2); // less than
console.log(num1 >= num2); // greater than or equal
console.log(num1 <= num2); // less than or equal
// Test 4 : And OR operators
console.log('\n 4 .Tests using "and" and "or" operators');
//     10 less than 20 (True) And 20 greater than 10 (True)  
console.log(10 < 20 && 20 > 10);
//     10 less than 20 (False) And 20 greater than 10 (Flase)
console.log(20 < 10 && 10 > 20);
// or operater
console.log(5 == 5 || 5 == 5);
// Test 5 : item is in a array
console.log('\n 5 .Test whether an item is in a array');
let array = [1, 2, 3, 4, 5, 6, 7];
console.log(array.includes(5));
// Test 6 : item is not in a array
console.log('\n 6 .Test whether an item is not in a array');
console.log(array.includes(8));
