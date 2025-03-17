function knowtruth(name1,name2){// create a function with two parameters name1 and name2

// the two condition variable is check the parameters is string and length is more than 1
    const condition1 = name1.length>1 && typeof(name1) === 'string'; 
    const condition2 = name2.length>1 && typeof(name2) === 'string';

    if(condition1 && condition2){ // tis will execute if two condition is true 
      let one = name1.length// store name1 length in the one variable
      let two = name2.length // store name2 length in the two variable

      if(one>two){ // this execute if the one length is greater than two
        return name2 + " name length is " + two + " but the " + name1 + " name length is " + one +  " so the winner is " + name1
      }
      else if(one == two){ //this execute if both name has the same length
        return name1 + " length is "+ one + " and " +  name2 +" length is "+ two + " both in the same length so game is tie"
      }
      else{ // this will execute if the two condition are false if and else
        return name1 + " name length is " + one + " but the " + name2 + " name length is " + two +  " so the winner is " + name2
      }
    }
    else{ // this will execute if just one condition is false
        try{
            throw new Error("An error occur because the enterded name is less than or equal to 1")
        }catch(err){
            console.log(err) // print the error in the output
            console.log("Enter the correct arguments otherwise you get an error") // this warn the user's after the error occur 
        }
    }
}
let finalans = knowtruth("leo dass","comali leo")// the finalans variable store the return value 
console.log(finalans) // then print the finalans variable