// 1. Print numbers from 1 to 10 using a loop
for ( var i = 1; i<=10;i++){
    console.log(i);
}

// 2. Check whether a given number is even or odd.
var num = 9;
if (num%2 == 0){
	console.log("Even");
}else{
	console.log("Odd");
}

// 3. Find the sum of all elements in an array.
var arr = [1,2,3,4,5];
let i=0;
var sum =0;
for( i in arr){
	var sum = sum+arr[i];
}
console.log(sum);

// 4. Print each element of an array on a new line.
var arr=[1,2,3,4,5];
for(let i in arr){
	console.log(i);
}

// 5. Count the number of elements in an array without using length.
var count = 0;
var arr = [1,2,3,4,5,6];
for (let i in arr){
    count++;
}
console.log(count);

// 6. Reverse a given string.
var str ="hello";
var str_rev = str.split("").reverse().join("");
console.log(str_rev);

// 7. Find the largest number in an array.
const arr_num = [ 1,3,24,56,7,23,9];
const maxi_num = Math.max(...arr_num);
console.log(maxi_num);

// 8. Check if a number is positive, negative, or zero.
const num = -2;
if( num<0){
	console.log("Negative");
}
else if(num>0){
	console.log("Positive");
}
else{
	console.log("Equal to zero");
}

// 9. Print the multiplication table for a given number.
function mu(number){
	if (typeof number !== 'number' || isNaN(number)){
		console.log("Invalid Entry! Please enter a valid number.");
	}
	console.log(`=== Multiplication Table of ${number} ===`);
	for( let i = 1; i<=10; i++){
		var result = number * i;
		console.log(`${number} x ${i} = ${result}`);
	}
}
mu(9);
mu(6);

// 10. Count the number of vowels in a string.      
function vowcount(str){
	const vow =['a','e','i','o','u'];
	let str1 = str.toLowerCase();
	let count = 0;
	for ( let char of str1){
		if(vow.includes(char)){
			count++;
		}
	}
	console.log(`Number of vowels in ${str} is ${count}`);
}
vowcount("HeLlo"); 

// 11. Write a function to return the greater of two numbers.
function greatest(n1,n2){
	if(n1>n2){
		var g = n1;
	}else if(n2>n1){
		var g = n2;
	}else{
		var g=n1;
	}
	console.log(`Greatest of ${n1} and ${n2} is ${g}`);
}
greatest(3,4);
greatest(56,56);
	

// 12. Print all keys and values of an object.
const obj ={roll:101, name:"Jyo", age:12};
for( let key in obj){
	console.log(`Key: ${key}, Value: ${obj[key]}`);
}

// 13. Check if a given value exists in an array.
const arr = [1,2,3,4,5,6,7,8,9,10];
const gvn = 2;
if ( arr.includes(gvn)){
	console.log(`${gvn} exists in array`);
}else{
	console.log(`${gvn} not in array`);
}
