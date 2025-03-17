//object and array 

// that why we can declare an object with brakect notation like this obb[name]

let obb = {//create a object
    //declare a value using property key 
    name:"venkat",
    age:19,
    studing:"BCA",
    extra:"learning something",
    more:"doing nothing"
}
let obbproperty = ["name","age","studing","extra","more"]// create an array print the object 
for(let i=0;i<obbproperty.length;i++){//loop for print one by one 
    console.log(i+1 +": " + obb[obbproperty[i]]) /*obb[obbproperty[i]] convert into when i = 0 its represent name
    and name represent venkat because name is a property key of venkat and its change into obb[name] so its print 
    venkat. same for the rest*/
}
