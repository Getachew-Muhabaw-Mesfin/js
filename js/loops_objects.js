/////////// Question 1 ////////////////////////
/**
● Write a function that prints the first 10 integers
 on the console starting from the number 1 using
the JavaScript for loop
 */

function print10Numbers() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
// print10Numbers()

////////////////Question 2 /////////////////////

/**
 * Write a function that takes a single number as an argument and prints the next 5 numbers in the
console. Note: each output should be displayed on a new line.
-Test case: If you give 7 to the function, output should look like this:
            8
            9
            10
            11
            12
 */

function next5Numbers(num) {
  for (let i = num + 1; i <= num + 5; i++) {
    console.log(i);
  }
}

// next5Numbers(7)

////////////////////// Question 3 ////////////////////////////
/**
  Write a function that takes a single number and prints the sum of the next 10 numbers after the
given number.

 -Test case: If you give 7 to the function, output should be: 125 - because (8 + 9 + 10+
11+ 12+ 13+ 14+ 15+ 16+ 17 = 125
 
*/

function sumOfNext10Numbers(num) {
  let sum = 0;
  for (let i = num + 1; i <= num + 10; i++) {
    sum += i;
  }
  console.log(sum);
}

// sumOfNext10Numbers(7)

//////////// Question 4 /////////////////////////

/**
 Write a function that takes an array as an argument and prints every element of the array on the
console.
 Test case: given the array a = [1, "Hello", 8, 44], output should look like this:
            1
            Hello
            8
            44
 */

function arrayList(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
let a = [1, "Hello", 8, 44];

// arrayList(a)

///////// Question 5 ///////////////////////

/**
  Write a function that takes an array as an argument and prints the total number of elements
found in the array. Hint: use a property of the Array object to solve this question.
    Test case 1: Given the array a = [1, "Hello", 8, 44], output should be: 4
    Test case 2: Given the array a = ["world", 13], output should be: 2
 */

function arrayLength(arr) {
  console.log(arr.length);
}
let b = [1, "Hello", 8, 44];
// arrayLength(b)
b = ["world", 13];

// arrayLength(b)

////////////////Question 6 //////////////////////////////////////
/*
Write a function that takes an array of numbers as a parameter and logs in the console the sum of
all the numbers in the array.
        Test case 1: If you give this array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
        should be: 310 because 5 + 6 + 99 + 8 + 76 + 4 + 68 + 44
        Test case 2: If you give this array, [3, 0], to the function, output should be: 3 because
        3 + 0
*/

function sumOfArrays(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// let arry = [5, 6, 99, 8, 76, 4, 68, 44];
// let t = sumOfArrays(arry);
// console.log(t)
//  arry = [3,0];
//  t = sumOfArrays(arry);
// console.log(t)

///////////////// Question 7 //////////////////////////////////

/** 
 * Write a function that takes an array of all numbers as a parameter, subtracts the total sum of all
odd numbers of the array from the total sum of all even numbers and logs the result in the
console.
    Test case: If you give these array, [5, 6, 99, 8, 76, 4, 68, 44], to the function, output
    should be: 102
        ■ Sum of odd numbers: 5 + 99 = 104
        ■ Sum of even numbers: 6 + 8 + 76 + 4 + 68 + 44 = 206
        ■ Difference between total even and total odd numbers: 206 - 104 = 102 
*/

function evenOddDifference(arr) {
  let evens = 0;
  let odds = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens += arr[i];
    } else {
      odds += arr[i];
    }
  }
  let difference = evens - odds;
  return difference;

  // Method 2
  // let total =0
  // let evens = 0
  // for(let i=0; i<arr.length; i++) {
  //     total += arr[i]
  //     if(arr[i]%2 ===0){
  //         evens += arr[i]
  //     }

  // }
  // let oddes = total -evens
  // return evens - oddes
}

let d = [5, 6, 99, 8, 76, 4, 68, 44];
// let dd = evenOddDifference(d)
// console.log(dd)

//////////////////Questions 8 ///////////////////////

/**
Write a function that takes an array as a parameter and logs in the console the elements that have
even indexes only. Notice: this question is not asking you to log elements with even value, but
elements that are located on even indexes)
    Test case 1: If you give this array to the function [5, 6, 99, 8, 76, 4, 68, 44], toutput
    should be:
            5
            99
            76
            68
Test case 2: If you give this array to the function [11, “Sam”, 3, 7, “car”], output should
be:
        11
        3
        car
 */

function evenIndexElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      console.log(arr[i]);
    }
  }
}

// evenIndexElements([5, 6, 99, 8, 76, 4, 68, 44]);
// evenIndexElements([11, "Sam", 3, 7, "car"])

//// Bones
//Why javascript sort gets so many memes -> https://www.youtube.com/watch?v=u7NFUX62-cM
let fun = [6, -2, 2, -7];
console.log(fun.sort());

function mySort(a, b) {
  if (a > b) {
    return 1;
  } else if (b > a) {
    return -1;
  } else {
    return 0;
  }
}

// cool thing happens here
// let sortedArray = fun.sort(mySort);
// console.log(sortedArray)

// let s = fun.sort((a,b)=>a-b) // Recommend for number comparision only
// console.log("Sorted Array is: ",s)

///////////////////Question 9 Questions on built in JavaScript methods //////////////////////////

/**Write a function that takes the sampleArray as a parameter, removes the last element from the array,
adds a new value of "32" to the array and prints the new array on the console. Hint: use an array method
 */

let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
function removeLast(sampleArray) {
  sampleArray.pop();
  sampleArray.push(32);

  console.log(sampleArray);
}

// removeLast(sampleArray)

////////////////// Question 10 ///////////////////////////////////

/** Write a function that takes the sampleArray as an argument, sorts the array in ascending order
and prints the sorted array on the console
// Use the sort method. Make sure you understand just using the sort() method alphabetically.
You should use this sorting syntax - sort(function(a, b){return a-b});
*/

function customeSort(sampleArray) {
  let asSort = sampleArray.sort((a, b) => a - b);
  // let dsSort = sampleArray.sort((a,b)=>b-a) // Dscending Order

  console.log("Ascending Order :", asSort);
  // console.log("Dscending Order :",  dsSort);
}
// customeSort(sampleArray)

//////////////////////////// Question 11  From the give class below///////////////////


/**
 * Change the lengthOfCourse property of the object to "5 Month" and print the new object on the
console
    Use the dot notation "." to call the property you want to change
 */
let evangadiClass = {
lengthOfCourse: "1 Month",
website: "https://www.evangadi.com/",
isChallenging: false,
topicsCovered: ["HTML", "CSS", "Media Query", "JavaScript"],
students: [
    {
    name: "Abebe",
    age: 34,
    sex: "M",
    },
    {
    name: "Kebede",
    age: 44,
    sex: "M",
    },
    {
    name: "Almaz",
    age: 27,
    sex: "F",
    },
    {
    name: "Challa",
    age: 22,
    sex: "M",
    },
    {
    name: "Chaltu",
    age: 19,
    sex: "F",
    },
],
};



evangadiClass.lengthOfCourse = "5 Month";
console.log(evangadiClass.lengthOfCourse);




////////////////////////// Question 12 ////////////////

/**
 Add "Bootstrap" at the end of the topicsCovered property and print the new object on the
console
  Use an array method

 */

evangadiClass.topicsCovered.push("Bootstrap");
console.log(evangadiClass.topicsCovered);



//////////////Question 14////////////////////////////////////////

/**
 * Write a function that takes the "evangadiClass" object as an argument and calculates the average
age of the class. Print the result on the console

 */

function calculateAverage(obj) {
    let sum = 0
    let number_of_students = obj.students.length;
    for (let i = 0; i < number_of_students; i++) {
        sum += obj.students[i].age
    }
    let average = sum/number_of_students

    console.log(average) // 29.2
    console.log(Math.round(average)); // 29
}

calculateAverage(evangadiClass)