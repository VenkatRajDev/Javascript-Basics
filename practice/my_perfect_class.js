class myclass {
    // toarray method is take the input and convert into an array
    toarray(input){
        let array = []// this is an array we will return

        let strvalue = input.toString()//first we convert the input to string

        const inputlength = strvalue.length//store the lenght of the input

        /**loop over the input and store into the array
         * and return it
         */
        for(let i=0;i<inputlength;i++){
            array.push(strvalue[i])
        }
        //return array with some output
        return array
    }

    method2(){}

}
const newobject = new myclass()

console.log(newobject.toarray(`venkat raj`))