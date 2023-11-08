/////////// Question 1 ////////////////////////
/**
● Write a function that prints the first 10 integers
 on the console starting from the number 1 using
the JavaScript for loop
 */

function print10Numbers() {
    for(let i =1; i<=10; i++) {
        console.log(i)
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
    for(let i = num +1 ; i<= num+5; i++) {
        console.log(i)
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
    let sum =0
    for(let i = num+1; i<=num+10; i++) {
        sum += i
    }
    console.log(sum)
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
    for(let i =0; i<arr.length; i++) {
        console.log(arr[i])
    }
}
let a = [1, "Hello", 8, 44]

// arrayList(a)





///////// Question 5 ///////////////////////

/**
  Write a function that takes an array as an argument and prints the total number of elements
found in the array. Hint: use a property of the Array object to solve this question.
    Test case 1: Given the array a = [1, "Hello", 8, 44], output should be: 4
    Test case 2: Given the array a = ["world", 13], output should be: 2
 */

function arrayLength(arr) {
    console.log(arr.length)
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
    let total =0
    for(let i =0; i<arr.length; i++) {
        total += arr[i]
    }
    return total
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
    let evens = 0
    let odds = 0
    for(let i=0; i<arr.length; i++) {
        if(arr[i]%2 ===0) {
            evens += arr[i]
        }
        else {
            odds += arr[i]
        }
    }
    let difference = evens - odds
    return difference
    
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
let dd = evenOddDifference(d)
console.log(dd)







