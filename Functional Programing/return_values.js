// return value in function
function nums(val){
    return val
}

/* we can use return values one function inside another function
so this is the use of return values in javascript*/
function obb(some){
    return some
}
console.log(obb((nums("hello world!"))))
