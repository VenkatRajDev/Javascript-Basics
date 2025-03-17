class Car {
    constructor(name = "venkat",speed = 200,power = 150 ,milage = "1 km",color = "green"){
        this.mycarname = name;
        this.mycarspeed = speed;
        this.mycarpower = power;
        this.mycarmilage = milage;
        this.mycarcolor = color;
    }
    ditial(){
        console.log("this car name is " + this.mycarname)
        console.log("this car color is " + this.mycarcolor)
    }

    engein(){
        console.log("this car speed is " + this.mycarspeed)
        console.log("this car milage is " + this.mycarmilage)
        //console.log("this car power is " + this.mycarpower)
    }
}
class Toyoto extends Car {
    constructor(name, speed, milage, version){
        super(name ,speed, milage);
        this.version = version;
    }
    ditial(){
        super.ditial()
        console.log("this Toyoto car name is " + this.mycarname)
    }
    engein(){
        super.engein()
        console.log("this Toyoto car speed is " + this.mycarspeed)
        console.log("this Toyoto car milage is " + this.mycarmilage)
    }
}
let car1 = new Car()
let car2 = new Car()
//car2.ditial()

let Toyoto1 = new Toyoto("good toyoto",150,150,"1 km","version:3.4")
console.log(Toyoto1.mycarmilage)
