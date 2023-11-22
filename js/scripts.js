'use strict'

///////////////////Question 1/////////////

document.getElementById("title").innerHTML =
  "INSPECT To See the OUTPUT use F12 ".toUpperCase();

console.log("A. 24>3 :", 24 > 3);
console.log('B. 2 < "12" :', 2 < "12");
console.log("C. 0 == 2 :", 0 == 2);
console.log("D. 2.0 === 2", 2.0 === 2);
console.log('E. 2.0 == "2":', 2.0 == "2");
console.log('F. 2 < "John"', 2 < "John");
console.log('G. 2 > "John"', 2 > "John");
console.log('H. "2" < "2"', "2" < "2");
console.log('I. "2" > "12"', "2" > "12");
console.log("J. 1 == 1 || 3 == 2 || 3 == 7", 1 == 1 || 3 == 2 || 3 == 7);
console.log("K. 1 == 1 && 2 == 2 && 3 == 7", 1 == 1 && 2 == 2 && 3 == 7);
console.log("L. 1 == 1 || 2 == 2 && 3 == 7", 1 == 1 || (2 == 2 && 3 == 7));
console.log(
  'M. 1 == true && 0 > true || "31" > "9" || 10 > 5 || !("2" == "two" || 1 == "1")',
  (1 == true && 0 > true) || "31" > "9" || 10 > 5 || !("2" == "two" || 1 == "1")
);






// ////////////// Question 2 /////////////////////

console.log(1==1) // True - the value are equal
console.log(1===1) //Ture -both value and type are equal
console.log('1'===1) //False - the same value but d/f data type
let t = 1 == true;
console.log(t); // True - The value of true is 1

let x = 10;
let y = (x > 5) && (x < 15)
console.log(y); // true  - && expacts both expression should be true to retun true

let num = 5;
num += 3;
console.log(num); //8 -num = num+3


var num1 = 10;
var num2 = num1++;
console.log(num2); // 11 - it increased by 1


let n = 1;
let m = (n !== 2);
console.log(m); // true - !false

console.log(+"2" + 2); // 4 -js assume that it sould be add
console.log("2" + 2); //22 -concat 
console.log(+"a" + 2); // NaN - we can not add string a with number 2 mathematically 

console.log(7 % 3); //1 - calculate the reminder

console.log(2 + true); // 3 - true value is 1 so 2+1 == 3



/////////////////Question 3 /////////////////////////////////

let a = Number(prompt("Please enter first number :"))
let b = Number(prompt("Please enter second number :"))
let c = a+b

if (!isNaN(a) && !isNaN(b)) {
  console.log(
    ` %c The sum of ${a} and  ${b} is: %c ${c}`,
    "font-size: 21px",
    "color:green;font-size: 21px"
  );
  
}
else 
console.log("Please Enter Valid Number")







///////////////// Question 4  /////////////////////


let first_name = "Getachew"
let last_name = "Muhabaw"
let full_name = `Your Name is: ${first_name} ${last_name}`

console.log(`%c ${full_name}`,'font-size: 24px; color:blue')




