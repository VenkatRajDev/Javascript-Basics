let pur = {
    name:"bata",
    noOfshoe:5,
    shoesprice:800,
    tax:50,
    total:function(){
       let calculate = this.noOfshoe * this.shoesprice;
       let calculate2 = this.noOfshoe * this.tax;
       let totalcul = calculate + calculate2;
       console.log(this.name)
       console.log('Total price = ' + totalcul)
    }
}
pur.total()

let pur2 = {
    name:"footballl",
    noOffootbal:1,
    price:1000,
    tax:100,
    total:function(){
        let calculation = this.noOffootbal * this.price;
        let calculation2 = this.noOffootbal * this.tax;
        let totalcal = calculation + calculation2;
        console.log(this.name)
        console.log("football total price: " + totalcal) 
    }
}
pur2.total()