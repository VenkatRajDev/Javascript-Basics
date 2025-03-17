// JSON

/**JSON is useful feature for when we are working with API and json is simply refers to 
 * javascript object notation. it can able to convert json syntax to js object and its also able to convert 
 * js object into a json syntax.
*/

/**its also a key value pair like object here's greeting is key value of its string*/

const Jonvalue = '{"greating":"hello you are welcome"}'// here we have an JSON syntax

const toObject1 = JSON.parse(Jonvalue)// we convert json syntax into normal obb with the help of parse built-in method

toObject1.greating = `hello is better` // now we could work with the json syntax like a normal object
console.log(toObject1);// log it

//now we have an object and we can convert that to json with the help stringify of built-in method
let obb = {
    name1:`not have a proper name`,
    name2:`venkat raj`,
    name3:`just name`
}
const toJson = JSON.stringify(obb)// convert into json 
console.log(toJson) // log it

const toObject2 = JSON.parse(toJson) // again convert json to obb
toObject2.name2 = `rick grimes`// working with it
console.log(toObject2.name2);// log it
