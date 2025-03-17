let star = ""

for(let i=1;i<=7;i++){
    for(j=1;j<=7;j++){
        if(i==1 && j==2){
            break;
        }
        else if(i==2 && j==3){
            break;
        }
        else if(i==3 && j==4){
            break;
        }
        else if(i==4 && j==5){
            break;
        }
        else if(i==5 && j==4){
            break;
        }
        else if(i==6 && j==3){
            break;
        }
        else if (i==7 && j==2){
            break;
        }
        star += "*"
    }
    star += "\n"
}
console.log(star)
