console.log("24>3 :", 24 > 3);
console.log('2 < "12" :', 2 < "12");
console.log("0 == 2 :", 0 == 2);
console.log("2.0 === 2", 2.0 === 2);
console.log('2.0 == "2":', 2.0 == "2");
console.log('2 < "John"', 2 < "John");
console.log('2 > "John"', 2 > "John");
console.log('"2" < "2"', "2" < "2");
console.log('"2" > "12"', "2" > "12");
console.log("1 == 1 || 3 == 2 || 3 == 7", 1 == 1 || 3 == 2 || 3 == 7);
console.log("1 == 1 && 2 == 2 && 3 == 7", 1 == 1 && 2 == 2 && 3 == 7);
console.log("1 == 1 || 2 == 2 && 3 == 7", 1 == 1 || (2 == 2 && 3 == 7));
console.log(
  '1 == true && 0 > true || "31" > "9" || 10 > 5 || !("2" == "two" || 1 == "1")',
  (1 == true && 0 > true) || "31" > "9" || 10 > 5 || !("2" == "two" || 1 == "1")
);


/** Js has 6 falsy values 
 * 0
 * false
 * Empty string
 * Undefined
 * Null
 * NaN
 */

// console.log('2'+'2'-'2') => 20

/**
 * let x = "5" + 2 + 3;
//output 523

let x = 2 + 3 + "5";
// output 55
 */