// simple example of functional programing

let oneSapathi = 10 // declare data in variable outside the function
let dinner = 25
let total = ""

function totalprice(food,amount){ // create function with two parameters
    return food * amount // multiple two that parameters and return it
}
total = totalprice(oneSapathi,dinner) //  store the function in total with two arguments which we declared first    
console.log(total) // console.log the total ==> output:250