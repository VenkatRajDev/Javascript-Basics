// find add or even using math object methods...

/* create a variable and asign the value of math.random that give 0.12324453 
when we multiple by 10 is give 1.23334332 , 3.34432343 , 6.349382021*/

let decimal = Math.random()*10

/* create a variable and asign math.ceil method , inside the method we asign decimal value so 
its give if decimal value is 2.332232233 = 3 , 5.332233223 = 6 and 9.3355343 = 10. its only 
give upwards of the decimal number like this */ 

let integervalue = Math.ceil(decimal)

if(integervalue%2==0){ // check if the integervalue is divided by two and reminder is 0 

    console.log(integervalue , " is even number")// if it's its print integervalue is even number
}
else{ // if is not is print integervalue is add number
    console.log(integervalue + " is add number")
}
