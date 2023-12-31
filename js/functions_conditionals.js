//// Question 1://///////////
/*Define a simple function named myFirst that prints the word "Hello" on the console
 ○ First define the function  Then call the function*/

function myFirst() {
  console.log("This is my first function");
}

myFirst();

//////Question 2: ///////////
/**  Define a function called mySecond that takes a parameter and prints the parameter on
console
 - Feel free to give any value as a parameter in your function
 */

function mySecond(x) {
  console.log(x);
}

// mySecond("Second Function call")

////// Question 3 ////////////////

/** Define a function called myThird that takes a parameter and prints the parameter on the
console. But, it uses mySecond function to print the parameter on the console */

function myThird(y) {
  mySecond(y);
}

myThird("Third function Call");

//////////// Question 4 //////////////////////////////

/** Write a function named myFourth that takes an array as a parameter and prints only the first
value of the array on the console. */

function myFourth(arr) {
  console.log("The first element in the given array is :", arr[0]);
}

let myarr = [2, 4, 5, 6, 7];
myFourth(myarr);

//////////////// Question 5 ///////////////////////

/**Write a function named myFifth that takes an array with two numbers in it as a parameter
and prints the sum of the two numbers on console */

function myFifth(arr) {
  if (Array.isArray(arr)) {
    let sum = arr[0] + arr[1];
    console.log(`The sum of ${arr[0]} and ${arr[1]} is: ${sum}`);
  } else console.log("The input is may not Array");
}

let arr = [3, 4];
myFifth(arr);

/////////// Question 6 ://////////////////////

/**Write a function that takes an integer minutes and converts it to seconds */

function minutesToSeconds(minutes) {
  if (Number.isInteger(minutes)) {
    let seconds = minutes * 60;
    console.log(`${minutes} minutes is equal to ${seconds} seconds`);
  } else {
    console.log("Please Enter Integer Only!");
  }
}

minutesToSeconds(4);

/////////// Question 7 ://////////////////////

/**Create a function that takes a number as a parameter, increments the number by +1 and
returns the result.
 */

function increment(x) {
  if (typeof x == "number") return (x = x + 1); // x++
  else return "Invalid Number";
}
let result = increment(6);
console.log(result);

/////////// Question 8 ://////////////////////

/**Write a function that takes the base and height of a triangle and returns its area. */

function areaOfTriangle(base, height) {
  if (
    typeof base == "number" &&
    typeof height == "number" &&
    base > 0 &&
    height > 0
  ) {
    let area = (base * height) / 2;
    return area;
  } else return "Please enter valid base or height";
}
let res = areaOfTriangle(6, 2);
console.log(res);

/////////// Question 9 ://////////////////////

/**Create a function that returns the total number of legs of all the animals. In this challenge, a
farmer is asking you to tell him how many legs can be counted among all his animals. The
farmer breeds three species (chickens = 2 legs, cows =, 4 legs, pigs = 4 legs). Remember:
the farmer wants to know the total number of legs and not the total number of animals.
 */

function totalNumberOfLeges(chickens, cows, pigs) {
  if (
    Number.isInteger(chickens) &&
    Number.isInteger(cows) &&
    Number.isInteger(pigs) &&
    chickens >= 0 &&
    cows >= 0 &&
    pigs >= 0
  ) {
    let chickens_leg = chickens * 2;
    let cows_leg = cows * 4;
    let pigs_leg = pigs * 4;
    let total_number_of_legs = chickens_leg + cows_leg + pigs_leg;

    return total_number_of_legs;
  } else return "Invalid Please Enter Valid Number";
}

let chickens = parseInt(prompt("How many Chickens Do you have?"));
let cows = parseInt(prompt("How many Cows Do you have?"));
let pigs = parseInt(prompt("How many Pigs Do you have?"));
let legs = totalNumberOfLeges(chickens, cows, pigs);

console.log("Total Number of Legs :", legs);

/////////// Question 10 ://////////////////////

/**Create a function that takes an array containing only TWO numbers as a parameter and
returns a value that is 3 times the first element of the array
 */

function myArray(arr) {
  if (
    Array.isArray(arr) &&
    arr.length == 2 &&
    typeof arr[0] == "number" &&
    typeof arr[1] == "number"
  ) {
    return arr[0] * 3;
  } else return "Not Valid Array!";
}

let arry = [3, 2];
console.log("Array", myArray(arry));

/////////// Question 11://////////////////////

/**Create a function that returns true when num1 is equal to num2; otherwise return false */

function isEqual(num1, num2) {
  if (typeof num1 == "number" && typeof num2 == "number") {
    if (num1 === num2) return true;
    else return false;
  }
}
let value = isEqual(3, 2);
console.log(value);

/////////// Question 12://////////////////////

/**Create a function that takes an integer and returns true if it's divisible by 100, otherwise
return false.
 */

function divisibleBy100(num) {
  if (typeof num == "number") {
    if (num % 100 == 0) return true;
    else return false;
  } else return "Not A number";
}
let d = divisibleBy100(100);
console.log(d);

/////////// Question 13://////////////////////

/**Create a function that takes a number as an argument and returns "even" for even numbers
and "odd" for odd numbers */

function checkParity(num) {
  if (!isNaN(num)) {
    if (num % 2 === 0) return "Even";
    else return "Odd";
  } else return "Not A Number";
}

let n = checkParity(4);
console.log(n);

/////////// Question 14://////////////////////

/**Create a function that returns
            ○ “Invalid score” if score is above 100 or score is a negative number
            ○ “Grade A” when score is between 90 and 100 (both 90 and 100 included)
            ○ “Grade B” when score is between 80 and 89 (both 80 and 89 included)
            ○ “Grade C” for any score below 79
 */

function checkYourGrade(score) {
  if (!isNaN(score)) {
    if (score > 100 || score < 0) {
      console.log("Your Score can not be negetive or greater than 100");
    } else if (score >= 90) {
      console.log("You Grade is : A");
    } else if (score >= 80) {
      console.log("You Grade is : B");
    } else {
      console.log("You Grade is : C");
    }
  } else {
    console.log("Please Enter Valid Grade:");
  }
}

checkYourGrade(60);
