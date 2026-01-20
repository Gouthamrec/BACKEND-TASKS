// 1 to 10

for (let i = 1; i <= 10; i++) {
  console.log(i);
}


// ODD or Even
let num = 7;
if (num % 2 === 0) console.log("Even");
else console.log("Odd");


// Sum of numbers in array

let arr = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);

// Print the elements in array

let arr1 = [10, 20, 30];

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}


// Number of elements in a array

let arr3 = [5, 6, 7, 8];
let count = 0;

for (let x of arr3) {
  count++;
}
console.log(count);


// String reverse
let str = "hello";
let rev = "";

for (let i = str.length - 1; i >= 0; i--) {
  rev += str[i];
}
console.log(rev);


// Find maximum in array
let arr4 = [3, 7, 2, 9];
let max = arr4[0];

for (let i = 1; i < arr4.length; i++) {
  if (arr4[i] > max) max = arr4[i];
}
console.log(max);


// Find positive or negative
let num1 = -5;

if (num1 > 0) console.log("Positive");
else if (num1 < 0) console.log("Negative");
else console.log("Zero");

// Multiplication table
let n = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${n} x ${i} = ${n * i}`);
}


// Count vowels in a string
let str1 = "education";
let count1 = 0;
let vowels = "aeiouAEIOU";

for (let char of str1) {
  if (vowels.includes(char)) count1 ++;
}
console.log(count);


// Function to find greater number
function greater(a, b) {
  return a > b ? a : b;
}

console.log(greater(10, 20));


// Object iteration
let obj = { name: "Ugesh", age: 20 };

for (let key in obj) {
  console.log(key + " : " + obj[key]);
}

// Array search
let arr6 = [1, 2, 3, 4];
let value2 = 3;
let found1 = false;

for (let x of arr6) {
  if (x === value2) {
    found1 = true;
    break;
  }
}
console.log(found1);

// Factorial
let n1 = 5;
let fact = 1;

for (let i = 1; i <= n1; i++) {
  fact *= i;
}
console.log(fact);

// Palindrome check
let str3 = "madam";
let rev2 = "";

for (let i = str3.length - 1; i >= 0; i--) {
  rev2 += str3[i];
}

console.log(str3 === rev2 ? "Palindrome" : "Not Palindrome");


// Object iteration
let obj1 = { name: "Ugesh", age: 20 };

for (let key in obj1) {
  console.log(key + " : " + obj1[key]);
}


// Array search
let arr5 = [1, 2, 3, 4];
let value = 3;
let found = false;

for (let x of arr5  ) {
  if (x === value) {
    found = true;
    break;
  }
}
console.log(found);




