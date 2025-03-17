// static method
class class1 {
    static names(){ // this is the static method use static keyword
        return `venkat raj
        rick grimes
        tom
        michal scofield
        mr.white`        
    }
    /**what is differents between static and normal method
     * in normal methods is defined in instance of the class,
     * But in static method, methods are difines class itself 
     * we can acess it using the calss name.
    */
    address(){ // and this is a normal method 
        return `not having an address and kindly request to not mention them`
    }
}
// Example
//console.log(class1.address()); /**this will give typeError bc address is a normal method
//and we could not acess it using the class name*/
console.log(class1.names());

// get method
class class2 {
    constructor(num1,num2){
        this.num1 = num1;
        this.num2 = num2;
    }
    /**what the different between static and get method is 
     * in get method the methods are not defined on class itself
     * we need instance of the class to acess it with get method 
     * the methods act like a property like this... 
     */
    get add(){ // its does not need () we could'nt pass parenthasis
        return this.num1 + this.num2
    }
}
let object1 = new class2(20,10)
console.log(object1.add);/**as we said the get method act like a property eg(without a ()*/

// static get method simply refers to getter method
class class3 {
   static get string(){
    return `this is a static get simply refer to getter method`
   }
   /**with the getter method we can do the two different serves in the single method
    * the method is defined on class itself and act like a property
    */
}
console.log(class3.string);