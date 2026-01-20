let arr = [1, 2, 3, 4];
let value = 3;
let found = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === value) {
    found = true;
    break;
  }
}
console.log(found);
