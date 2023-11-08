
//// Question 1/////////////

function myFirst() {
    console.log("This is my first function")
}

myFirst()


//////Question 2 ///////////

function mySecond(x) {
    console.log(x)
}

mySecond("Second Function call")


////// Question 3 ////////////////


function myThird(y) {
    mySecond(y)
}


myThird("Third function Call");


//////////// Question 4 //////////////////////////////

function myFourth(arr){
console.log("The first element in the given array is :",arr[0])
}

let myarr = [2,4,5,6,7]
myFourth(myarr)


//////////////// Question 5 ///////////////////////

function myFifth(arr) {
    let sum = arr[0]+ arr[1]
    console.log(`The sum of ${arr[0]} and ${arr[1]} is: ${sum}`);
}

let arr = [3,4]
myFifth(arr)



/////////// Question 6 ://////////////////////