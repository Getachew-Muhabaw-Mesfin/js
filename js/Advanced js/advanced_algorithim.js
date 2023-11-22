/**
 * Question 1 Given an array of numbers, write a function that prints in the console another array
which contains all the even numbers in the original array, which also have even indexes only.
Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4
 */
function getOnlyEvens(arr) {
  let even = [];
  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0 && arr[i] % 2 === 0) {
        even.push(arr[i]);
      }
    }
    console.log(even)
  } else {
    console.log("Invalid Array!");
  }
}

let a = [1, 2, 3, 6, 4, 8];
getOnlyEvens(a)
