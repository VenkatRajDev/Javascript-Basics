let star =""
let space =" "

for(let i=1;i<=5;i++){

        for (let j=1; j<=5;j++) {   
           if(i==2 && j==1 || i==3 && j<=2 || i==4 && j<=3 || i==5 && j<=4){
            star += space;
           }else{
            star += "$"
           }
        }
        star += "\n"
    }
console.log(star);