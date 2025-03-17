// prime number

let arr = [2, 3, 5, 7];

function primeNumber(value) {
  let filter1 = arr.filter((elements) => {
    return value % elements === 0;
  });

  if (filter1.length === 0) {
    // if the array is empty this part is execute
    console.log(`${value} is a prime Number`);
  } else if (value == 2 || value == 3 || value == 5 || value == 7) {
    console.log(`${value} is a prime number`);
  } else {
    console.log(`${value} is not a prime number`);
  }
}
primeNumber(5); // call the function and pass the argument