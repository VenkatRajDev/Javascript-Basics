function find(name,match){
let conditional1 = typeof(name) == "string" && name.length>=2
let conditional2 = typeof(match) == "string" && match.length == 1

if(conditional1 && conditional2){
    for(let i=0;i<name.length;i++){
        if(name[i] == match){
             console.log("found " + match + " at " + i) 
        }
        else{
            console.log("not found " + match + " at " + i )
        }
    }
}
else{
  try{
      throw new Error("please Enter correct arguments")
  }catch(err){
      console.log(err)
  }
}
}
find("d","d")