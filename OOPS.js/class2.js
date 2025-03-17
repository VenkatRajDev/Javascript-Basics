// little employer detial project short and simple

class information { // first we create an class and name it information

    constructor(name,age,salary,hobby,address){// create a constructor meathod that has four parameters
        
        // store the four paremeters as a property key to the property of the object
         
        this["Employee name"] = name;
        this["Employee age"] = age;
        this["Employee salary"] = salary
        this["Employee hobby"] = hobby;
        this["Employee address"] = address;
    }
   // create a method that print the employee detial's 
    hold(){
        /**
         * this array stored elements exatly like object of the property name
         * so we can print the stored value of the property 
         */
        let arrofinfo = ["Employee name","Employee age","Employee salary","Employee hobby","Employee address"]
        for(let i=0;i<arrofinfo.length;i++){
        console.log(arrofinfo[i] + ": "+ this[arrofinfo[i]])
        }
    }
}
// then store the class using the new keyword and we pass the arguments to the constructor
// rembember we can declare as many as object, every object has the different property that we pass 
//the constructor as a arguments, But all object share the same method 

const Em_info1 = new information("Venkat",19,"we will see about it","watching movies and tv shows","not found")
const Em_info2 = new information("Rick Grimes",40,"In full of dead we got no jobs","Killing walkers","dead world")
Em_info1.hold()
console.log("\n")
Em_info2.hold()