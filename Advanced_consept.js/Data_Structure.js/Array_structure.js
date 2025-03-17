// Array 

let marks = [40,20,40,50,60,10]// there are three method used in the array when you working on it

// forEach method
marks.forEach((elements,index) => { /*the foreach method is used for print the array with using for loop
    and we can handle the elements and index of an array*/
   console.log(`${elements} ${index}`)// then we console log the output first elements and index
})

// filter method
let fil = marks.filter((elements) => {return elements < 40}) /**the filter method is used for the 
filter the array its only give the true function and flase function its did not return and 
the return value stored in variable we created */
console.log(fil);

// map method
let map = marks.map((elements) => {return elements + 1})/**this method for in the array of each of the 
element is exsicuted and return all of them we can do math operator on that */
console.log(map)

/**there are the three usefull method on the array when we working on it */