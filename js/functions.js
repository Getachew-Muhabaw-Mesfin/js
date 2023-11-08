
//// Question 1://///////////
/*Define a simple function named myFirst that prints the word "Hello" on the console
 ○ First define the function  Then call the function*/


function myFirst() {
    console.log("This is my first function")
}

myFirst()




//////Question 2: ///////////
/**  Define a function called mySecond that takes a parameter and prints the parameter on
console
 - Feel free to give any value as a parameter in your function
 */


function mySecond(x) {
    console.log(x)
}

mySecond("Second Function call")


////// Question 3 ////////////////

/** Define a function called myThird that takes a parameter and prints the parameter on the
console. But, it uses mySecond function to print the parameter on the console */


function myThird(y) {
    mySecond(y)
}


myThird("Third function Call");


//////////// Question 4 //////////////////////////////

/** Write a function named myFourth that takes an array as a parameter and prints only the first
value of the array on the console. */

function myFourth(arr){
console.log("The first element in the given array is :",arr[0])
}

let myarr = [2,4,5,6,7]
myFourth(myarr)


//////////////// Question 5 ///////////////////////

/**Write a function named myFifth that takes an array with two numbers in it as a parameter
and prints the sum of the two numbers on console */

function myFifth(arr) {
    let sum = arr[0]+ arr[1]
    console.log(`The sum of ${arr[0]} and ${arr[1]} is: ${sum}`);
}

let arr = [3,4]
myFifth(arr)



/////////// Question 6 ://////////////////////

/**Write a function that takes an integer minutes and converts it to seconds */








/////////// Question 7 ://////////////////////

/**Create a function that takes a number as a parameter, increments the number by +1 and
returns the result.
 */






/////////// Question 8 ://////////////////////

/**Write a function that takes the base and height of a triangle and returns its area. */









/////////// Question 9 ://////////////////////

/**Create a function that returns the total number of legs of all the animals. In this challenge, a
farmer is asking you to tell him how many legs can be counted among all his animals. The
farmer breeds three species (chickens = 2 legs, cows =, 4 legs, pigs = 4 legs). Remember:
the farmer wants to know the total number of legs and not the total number of animals.
 */















/////////// Question 10 ://////////////////////

/**Create a function that takes an array containing only TWO numbers as a parameter and
returns a value that is 3 times the first element of the array
 */
















/////////// Question 11://////////////////////

/**Create a function that returns true when num1 is equal to num2; otherwise return false */


















/////////// Question 12://////////////////////

/**Create a function that takes an integer and returns true if it's divisible by 100, otherwise
return false.
 */














/////////// Question 13://////////////////////

/**Create a function that takes a number as an argument and returns "even" for even numbers
and "odd" for odd numbers */














/////////// Question 14://////////////////////

/**reate a function that returns
            ○ “Invalid score” if score is above 100 or score is a negative number
            ○ “Grade A” when score is between 90 and 100 (both 90 and 100 included)
            ○ “Grade B” when score is between 80 and 89 (both 80 and 89 included)
            ○ “Grade C” for any score below 79
 */

