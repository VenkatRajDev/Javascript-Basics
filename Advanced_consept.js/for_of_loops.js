// for of loops in javascript

// first we have an object
let object1 = {
    name:"raja",
    country: "japan",
    salary:2000
}/* i want to print all property value in the console
without for of loops its dificult but possible*/

//for(propertyvalue of object1){
  //  console.log(propertyvalue);
//}/**we get an type error bc object is not an iterable so we could not just print the object property 
//like that instead we have built-in methods there are */

// object.keys method
console.log(Object.keys(object1));// this will print the property key as an array [name,country,salary]

// object.values method
console.log(Object.values(object1));// the values of the property key [raja,japan,2000]

//object.entries method
console.log(Object.entries(object1));// this will print as an array of array [[name:raja],[country:japan],[salary:2000]]

// but in array we can print elements without any loop and methods using for of loops
let arr = [1,2,3,4,5]

// using for of loops
for(let element of arr){
    console.log(element);
}// this will print the entrier array element with needed any loops

// using these methods and for of loops now we can print the object property 
for(let key of Object.keys(object1)){
    console.log(object1[key]);
}// now we printed the all property in the object