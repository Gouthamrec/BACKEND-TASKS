//LARGEST NUMBER IN AN ARRAY
let arr = [10, 45, 2, 99, 23];
let large = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > large) {
    large = arr[i];
  }
}
console.log(large);