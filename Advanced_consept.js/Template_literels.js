// template literels

// regular strings
let name0 = "ven"/**when we are using regular string we can be only declare one line string */
let name$1 = "kat"

// we embaded the variables and join the two strings with the + operator
console.log("my name is starts with " + name0 + " and end with "+ name$1);

// template literals
let name1 = "ven"
let name2 = "kat"
/*using that we embaded the variable and put in the placeholder that refers to ${} this bractick is more use
full bc the code line is save using the bractick symbol*/
console.log(`my name is starts with ${name1} and end with ${name2}`);

/*the regular string was used until ES5, and with the help of ES6 we can simply use 
bractick symbol*/

// with that i can add multi lines of strings
let multi = `hello
world
and hello again world`
console.log(multi);// this is much more use full