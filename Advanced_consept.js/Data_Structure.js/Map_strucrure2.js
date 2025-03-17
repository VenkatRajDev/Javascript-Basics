function mapdatastruce(datas){

    const structuredData = new Map()
    datas.forEach((element,index) => {
        structuredData.set(index + 1,element)
    });
    return structuredData
}

console.log(mapdatastruce([`john`,`venkat`,`kishore`,`logan`,`leo dass`]));