const cars = [`marithi`,`toyoto`,`gtr`,`musule car`]

// add the value
cars.splice(1,0,`ramraj vattisatti`)
console.log(cars) // [ 'marithi', 'ramraj vattisatti', 'toyoto', 'gtr', 'musule car' ]

// delete the value
cars.splice(1,1)
console.log(cars)