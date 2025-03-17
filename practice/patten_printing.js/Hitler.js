let print =""
let space =" "
for (let i=0;i<7;i++) {
    for(let j=0;j<15;j++){
        if(i==0 && (j>=6 && j<=10) ||
           (i>=1 && i<6) && j==6 ||
           (i==6 && (j>=2 && j<=6) ||
            i==3 && (j>=2 && j<=5) ||
           (i>0 && i<3) && j==2) ||
            i==3 && (j>=6 && j<=10) ||
            (i>3 && i<6) && j==10)
            print += space
        else{
            print += "|"
        }
    }
    print += `\n` 
}
console.log(print);