// denfensive programming

function print(one,two){

let condition1 = typeof(one) == 'number';
let condition2 = typeof(two) == 'number'; 

    if(condition1 && condition2){
         if(one<two){
         console.log(one + " is less than " + two)
        }
        else if(one == two){
            console.log(one + " is equal's to " + two)
        }
    else{
        console.log(one + " grater than " + two)
    }
 }
 else{
    try{
        throw new Error("please Enter the correct arguments")
    }catch(err){
        console.log(err)
        console.log("Enter the two numaric number otherwise you get an Error")
    }
}
}
print(10000,"1000")