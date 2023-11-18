"use-strict";

// for(let i=0;i<10; i++){

//     if(i===5)
//     break;
//  console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   // if here not working
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
// }


// let nums =[1,2,3,4,5,6,7,8]

// for(n of nums){
//     console.log(n)
// }


// For in for objects
// const user ={firstName:"Getachew",lastName:"Muhabaw"}
// for(key in user)console.log(user[key])


//While
// let i =0
// while (i < 10) {
//   console.log(i);
//   i++;
// }


// let i =0
// while (i < 10) {
//     i++;
//     console.log(i);
// }


// //Do while
// let i=0
// do{
//     console.log(i)
//     i++;
// }while(i<10)


for(let i=0;i<6;i++){
    for(let j=1;j<i;j++){
        document.write("*"+" ")
    }
    document.write("<br>")
}