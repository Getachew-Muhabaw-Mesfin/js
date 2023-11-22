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



/**
 * Question 3
● Write a function that takes a positive integer and returns the factorial of the number.
Notes: The factorial of 0 is 1. Ex: factorial seven is : 1 × 2 × 3 × 4 × 5 × 6 × 7. The
factorial of any positive integer x is x * (x - 1) * (x - 2) * . . . . . . * 1 (ex: factorial of 4 is
4 * 3 * 2 * 1 = 24)
○ Test 1: returnFactorial(5) outputs 120
○ Test 2: returnFactorial(6) outputs 720
○ Test 3: returnFactorial(0) outputs 1
 */

function returnFactorial(num){
    let f=1
    if(Number(num)>=0 && Number.isInteger(num)){
        if(num ===0 || num ===1){
            return f
        }
        else {
           for(let i=num; i>0; i--){
             f*=i
           } 
           return f
        }
    }
}
let test1=returnFactorial(0)
let test2 = returnFactorial(5);
let test3 = returnFactorial(6)
// console.log(test1)//1
// console.log(test2)//120
// console.log(test3)//720


// Method 2 -------

const factorial = (num) => {
  if (num < 0) {
    throw new Error("num must not be negative");
  }
  if (num ===0 || num ===1) {
    return 1;
  }
  return num * factorial(num - 1);
};

// console.log(factorial(1))//1
// console.log(factorial(5))//120
// console.log(factorial(6))//720


/**
 * Question 4 (Meera array)
A Meera array is defined to be an array containing only numbers as its elements and for
all n values in the array, the value n*2 is not in the array. So [3, 5, -2] is a Meera array
because 3*2, 5*2 or 2*2 are not in the array. But [8, 3, 4] is not a Meera array because
2*4=8 and both 4 and 8 are elements found in the array. Write a function that takes an
array of numbered elements and prints “I am a Meera array” in the console if its array
does NOT contain n and also n*2 as value. Otherwise, the function prints “I am NOT a
Meera array”
○ Test 1: checkMeera([10, 4, 0, 5]) outputs “I am NOT a Meera array” because 5 *
2 is 10
○ Test 2: checkMeera([7, 4, 9]) outputs “I am a Meera array”
○ Test 1: checkMeera([1, -6, 4, -3]) outputs “I am NOT a Meera array” because -3
*2 is -6
 */
