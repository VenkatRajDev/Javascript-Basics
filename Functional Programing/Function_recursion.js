// example for stop recursion problem in function

// And print anything without use of loop
let counter = 1 // first initializes 1 in counter
function invoke(){ 
    console.log(counter)// print the counter
    counter += 1// incriment the counter
    /**
     * if counter === 16 the return value is executed and the function is stop 
     * if is not the next line function is ececuted again and again 
     * until counter equals to 16
     */
    if(counter === 16) return;
    invoke()
}
invoke() // now invoke the function