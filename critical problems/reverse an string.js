// reverse a string without using the reverse built-in method

// this function will return data in reverse
const revfun = function(data){
    let revname = ``// declare a variable with empty string
    const arr = data.split("")// convert the string into an array

    // loop over the data and reverse them
    let i = arr.length - 1;
    while(i >= 0){
        revname += arr[i]
        i--
    }

    return revname // return the reverse value
}

console.log(revfun(`venkat raj`))// call the function anywhere