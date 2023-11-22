/**
 * 
 * Question 9
Write a function that takes the sampleArray as a parameter, removes the last element from the array,
adds a new value of "32" to the array and prints the new array on the console. Hint: use an array method

 */
function arryMethods(arr) {
  // fucntions vs methods

  if (Array.isArray(arr)) {
    arr.pop();
    arr.push(32);
    console.log(arr);
  } else {
    console.log("Invalid Array");
  }
}
let sampleArray = [5, 6, 99, 8, 76, 4, 68, 44];
// arryMethods(sampleArray)

/**Question 10
● Write a function that takes the sampleArray as an argument, sorts the array in ascending order
and prints the sorted array on the console
// Use the sort method. Make sure you understand just using the sort() method alphabetically.
You should use this sorting syntax - sort(function(a, b){return a-b});
 */

function sortArray(arr) {
  if (Array.isArray(arr)) {
    arr.sort((a, b) => a - b);
    console.log(arr);
  } else {
    console.log("Invalid Array!");
  }
}
// sortArray(sampleArray);

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

/**
 * Question 11
● Change the lengthOfCourse property of the object to "5 Month" and print the new object on the
console
○ // Use the dot notation "." to call the property you want to change

 */

// evangadiClass.lengthOfCourse = "5 Month"
// console.log(evangadiClass.lengthOfCourse)
// evangadiClass.topicsCovered.length

// console.log(evangadiClass.topicsCovered.length)

// let l = evangadiClass.topicsCovered.length

// for(let i=0;i<l;i++){
//     console.log(evangadiClass.topicsCovered[i])
// }

// for(topic of evangadiClass.topicsCovered){
//     console.log(topic)
// }

/**Question 12
● Add "Bootstrap" at the end of the topicsCovered property and print the new object on the
console
○ // Use an array method
 */

// evangadiClass.topicsCovered.push("Bootstrap");

// console.log(evangadiClass.topicsCovered)

/**
 * Question 13
●Write a function that takes the "evangadiClass" object as an argument and calculates the average
age of the class. Print the result on the console

 */

function averageOfAges(obj) {
  let sum = 0;
  let l = obj.students.length;
  console.log(l);
  for (let i = 0; i < l; i++) {
    sum += obj.students[i].age;
  }
  let average = sum / l;

  // console.log("The average of Students Age is:", average);
  console.log(Math.round(average));
  // console.log(`The average of students Age is: ${Math.floor(average)}`);
}
// averageOfAges(evangadiClass)

/**
 * Question 14
Write a function that takes the "evangadiClass" object as an argument and calculates the
percentage of male students in the class. Print the result on the console
 */

function malePercentage(obj) {
  let total_number_of_students = obj.students.length;
  let numumbe_of_males = 0;
  for (let i = 0; i < total_number_of_students; i++) {
    if (obj.students[i].sex === "M") {
      numumbe_of_males++;
    }
  }

  let percentage = (numumbe_of_males / total_number_of_students) * 100;
  console.log(`${percentage}%`);
}
// malePercentage(evangadiClass)

/**
 * Question 15: Test the divisors of three
Write a function that takes 2 parameters: a low and high number. Your goal is to print all
numbers (on the console) between low and high, and for each of these numbers print
whether or not the number is divisible by 3. If the number is divisible by 3, print the word
"div3" directly after the number
 */

function divByThree(low, high) {
  if (high > low && typeof low === "number" && typeof high === "number") {
    for (let i = low + 1; i < high; i++) {
      if (i % 3 === 0) {
        console.log(i, "div3");
      } else console.log(i);
    }
  } else {
    console.log("Invalid");
  }
}
//2,10 => 3div3,4,5,6div3,7,8,9div3
//  divByThree(10,2)

/**
 * Question 16: The famous coding interview question (FizzBuzz)
Write a function that prints in the console the numbers from 1 to 100. But for multiples of
three print “Fizz” instead of the number and for the multiples of five print “Buzz” and for
numbers which are multiples of both three and five print "FizzBuzz"
 */

//>10 boun 98
/**
 * if if
 * if else if else
 */

function fizzBuzz() {
  for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i, "FizzBuzz");
    } else if (i % 3 == 0) {
      console.log(i, "Fizz");
    } else if (i % 5 === 0) {
      console.log(i, "Buzz");
    } else {
      console.log(i);
    }
  }
}

//  fizzBuzz()

/**
 *Evens number
 An Evens number is an integer whose digits are all even. For example 2426 is an Evens
number but 3224 is not. Write a function named isEvens that prints on the console 1 if its
integer argument is an Evens number. The function prints 0 otherwise.
 */

function isEven(digits) {
  digits = String(digits);
  let d = "";
  for (let i = 0; i < digits.length; i++) {
    if (digits.charAt(i) % 2 == 0) {
      d = d + digits.charAt(i);
    }
  }
  if (d == digits) {
    return 1;
  } else {
    return 0;
  }
}
let e = isEven(2426);
console.log(e);
