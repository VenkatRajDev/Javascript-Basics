/**set is an another data structure in js and its 
 * must be in unique value 
*/
let set1 = new Set()// create a set using new keyword

set1.add(`venkat`).add(`kumar`).add(`kanna`).add(`kishor`) // we add data in the set using add method
console.log(set1);// log it

set1.delete(`venkat`)// we can delet the data using delete method
console.log(set1);// log it

console.log(set1.keys()) // we can get the values in the the set using keys method

console.log(set1.has(`kishor`)) // we can check the data is in the set using "has" method it's return boolean value

set1.clear()// we can clear the whole set data using clear method
console.log(set1)// log it

let arr = [`apple`,`orange`,`pinaple`,`apple`,`orange`,`grape`]
let set2 = new Set(arr)// we can pass an array in the set its preaty helpfull for identify unique data
console.log(set2);// log it