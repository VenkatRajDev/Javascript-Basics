let homelander = {
    canfly:true,
    morepowerfull:true,
    fovdiolog:"look at me",
    dothings:"shaking on top of the bulding"
}
console.log("homelander can fly: " + homelander.canfly)
console.log("homelander is more powerfull: " + homelander.morepowerfull)
console.log("homelander best dilog: " + homelander.fovdiolog)

let deep = Object.create(homelander)
deep.canfly = false
deep.morepowerfull = false
deep.fovdiolog = "not any good"
console.log("deep can fly: " + deep.canfly)
console.log("deep is more powerfull: " + deep.morepowerfull)
console.log("deep's best dilog: " + deep.fovdiolog)