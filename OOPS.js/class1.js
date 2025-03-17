class car { // create a class using class keyword

    //constructor method it has the two parameter
    constructor(color,speed){
        this.mycolor = color // store color in the mycolor property
        this.myspeed = speed // doing the same thing
    }
    //method

    print(){
        console.log(`hi this is my new ${this.mycolor} color car and ${this.myspeed} km per mim`)
    }
}
/* store the car class in the car1 and this has 
 two arguments for the constructor parameter*/

const car1 = new car("pink",200)// this arguments pass in the constructor parameater and color ="pink" and speed = 1000
const car2 = new car("blue",1000)// does the same thing here
car1.print()
console.log(car1.mycolor)// pink
console.log(car1.myspeed)// 200
console.log(car2.mycolor)// blue
console.log(car2.myspeed)// 1000