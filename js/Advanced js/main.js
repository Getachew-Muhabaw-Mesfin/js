

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

