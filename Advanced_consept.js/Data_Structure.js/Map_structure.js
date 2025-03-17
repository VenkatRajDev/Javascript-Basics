/**the map structure in javascript is use full for some cases */

let name1 =`rick grimes`
let name2 =`diryl`
let name3 =`coral` 

const map = new Map()// create a map using new keyword
map.set(1,name1)// add value to it using set keyword
map.set(2,name2)
map.set(3,name3)
console.log(map);// log it

map.delete(2) // we can delet the data using delete method
console.log(map);// log it

console.log(map.get(1))// we can get the data in the map using get method

console.log(map.has(2)) // we can check the data is in the map using has method it gives boolean value

console.log(map.keys()) // we can get the key in the the map using keys method

map.clear()// we can clear the whole map data using clear method
console.log(map)// log it