/**
 * Question 1 Given an array of numbers, write a function that prints in the console another array
which contains all the even numbers in the original array, which also have even indexes only.
Test 1: getOnlyEvens([1, 2, 3, 6, 4, 8]) prints [ 4]
Test 2: getOnlyEvens([0, 1, 2, 3, 4]) prints [0, 2, 4
 */


// Method 1
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

/// Method 2 --- Using Filter --- Recommened
function getOnlyEvens(arr) {
  if (Array.isArray(arr)) {
    arr = arr.filter((num, index) => index % 2 === 0 && num % 2 === 0);
    console.log(arr);
  } else {
    console.log("Invalid Array!");
  }
}

let b = [1, 2, 3, 6, 4, 8];
// getOnlyEvens(b);



/**
 * Question 2
● Create a function that takes a two-digit number as an parameter and prints "Ok" in
the console if the given string is greater than its reversed digit version. If not, the
function will print "Not ok"
○ Test 1: reverseCompare(72) prints "ok" because 72 > 27
○ reverseCompare(23) prints "Not ok", because 23 is not greater than 32

Question ---? is num can be negetive 
 */

function reverseCompare(num) {
  if (Number.isInteger(num) && num >= 0) {
    let str = String(num).split(""); // return Array 
    let reverse = str.reverse().join("")
    if(Number(num) >Number(reverse)){
        console.log("OK")
    }
    else{
        console.log("Not OK")
    }
    
  } else {
    console.log("Invalid Number");
  }
}


// reverseCompare(72);// Ok
// reverseCompare(23);//NOt Ok