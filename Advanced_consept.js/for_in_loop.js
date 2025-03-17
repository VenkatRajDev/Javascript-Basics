let object1 = {
    name:"bcci",
    country:"not in earth",
    place:"that also not in earth"
}
let object2 = Object.create(object1)
object2.being = "not in living being also"
// so when we working with inheritance the for in is not quit good bc its also loop over the prototype of the objecte2
console.log("for in is an unrelaible");
for(let key in object2){
    console.log(key + ":" + object2[key]);
}// the output is not just object2 property including the object1 property bc this is the ptototype of object2
console.log("\n");
console.log("for of is an relaible");
// here's the right one
for(let keey of Object.keys(object2)){
    console.log(keey + ":" + object2[keey]);
}