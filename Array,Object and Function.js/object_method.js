// object method...

let car = {} // cerate an onject using the object litrals 

car.color = "pink"
car.milage = 2 + " km"
car.speed = 1000 + " m per mims"// created the object as we know using dot and assingment operator

/* let create the function know an method in object. In javascript object, when we create a function inside an object it 
refered as a method so i create a method inside the object. Remember the method is a property of the object and we
declare like this..*/
car.trunthekey = function(){
    /*
      inside the function body we can write any code that compelet the particular task.
      but now i just loged the string
     */
    console.log("engine in on and get ready for the start")
}
car.offthecar = function(){
    console.log("car engine is off")// same on this
}

/*
  finaly i invoke the method like this (objectname.property of the object()) with that we can invoke or call the
  object to do some task 
 */
car.trunthekey()
car.offthecar()