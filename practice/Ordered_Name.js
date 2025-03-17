let OrderedName = function(value){
    let inorder = ``
    let splitName = value.split("")

    splitName.forEach((elements,index) => {
        inorder += elements
        console.log(inorder)
    });
}
OrderedName("venkat")