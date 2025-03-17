// scope chain in javascript 

let global = "hi this is global scope" // globel scope

function scope(){ // over all incide the function code is local scope 
    
    let local = "hi this is local scope " // the variable is scoped in the function or local scope
    return local + global
}
let ans = scope()
console.log(ans)