/**callback function in javascript*/

function call(callback){
    let value = callback("Ven") // call function inside the function
    return value
}
/**when we pass an argument as a function its called callback function*/
let log = call(name => {return name[0]}) 
console.log(log)// log it