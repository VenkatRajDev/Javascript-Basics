// function , object and array:
function call(name ="",age =0,job ="",detial="") { //declare a function with parameters that we declare in object as a property key..
    let obb = {// declare object
        name:name,
        age: age,
        job:job,
        detial:detial
    };
    // next step:

    let property = ["name","age","job","detial"]// create an array for print the object so we store property key in array...
    for(let i=0;i<property.length;i++){
        console.log(obb[property[i]])
    }
}
// finaly we can declare whatever value in it:
call("dass",50,"good guy","has the biggest job")


