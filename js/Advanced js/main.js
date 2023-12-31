

let x=1

const parretFunction  =  () =>{
let my_value = 2
console.log(x) 
console.log(my_value)

const childFunction = () =>{
    console.log(x+=2)
    console.log(my_value+=2)
}
// childFunction() => Normal print as expactd

return childFunction // piont not call if call it prints as expactd
}

// let result = parretFunction()
// console.log(result)
// result()
// result()
// console.log("Value of Global x ",x)


// IIFE (Immediately invoked Function Expresion)

const privateCounter = (()=>{
    let count =0
    console.log("Initial value:",count)
    return ()=>{
        count+=1
        console.log(count)
    }
})();

// privateCounter()

const credit =((num)=>{
    let balance = num
    console.log(`Your Balance is : ${balance}`)
    return ()=>{
        balance -=1
        if(balance>0) console.log(`Playing Game, ${balance} remaining `)
        if (balance<=0) console.log("Not enough balance ")
    }
})(3); // immaditly call
// credit() // passed for return function
// credit()
// credit()


// Recursion > A function occurs when a function calls it s elf

const recurToTen = (num=1)=>{
    if(num>10) return
    console.log(num)
    num++
    recurToTen(num)
}
//recurToTen() // 1-10

// faibonace serias

const fib = (num, array =[0,1]) =>{
    if(num <=2) return array
    const [nextToLast, last] =array.slice(-2)
    return fib(num-1,[...array, nextToLast + last])
}
// console.log(fib(12))

const factorial =(num) =>{
    if (num < 0) {
        throw new Error("num must not be negative");
    }
    if (num <= 1) {
        // Both 1! and 0! are defined as 1
        return 1;
    }
    return num * factorial(num - 1);
}
// console.log(factorial(5)); // 120


//curry function
const buildSandwich = (ingredient1)=>{
    return (ingredient2)=>{
        return (ingredient3) =>{
            return `${ingredient1} ${ingredient2} ${ingredient3}`
        }
    }
}
const mySandwitch = buildSandwich("Bacon")("Meat")("Totmato")
// console.log(mySandwitch)

// The same as 
const buildSammy = in1=>in2=>in3 => `${in1} ${in2} ${in3}`
const b = buildSammy("Chees")("bread")("turky")
// console.log(b)