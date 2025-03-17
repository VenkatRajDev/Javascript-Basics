// de-structuring array and object

// this is called de-structuring from an object and the pi value variable has the same value as Math.PI built in method
let PIValue = Math.PI;
console.log(PIValue === Math.PI);// this gives true
console.log(PIValue);

let {PI} = Math;
console.log(PI);
// we can change the value 
PI = 1;
console.log(PI === Math.PI);// this gives false because we changed the value of PI

/*Remember that when we use the built in method we copying the value and store in variable
and we can change the value*/