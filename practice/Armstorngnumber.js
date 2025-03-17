// find Armstrong Number

function Armstrongnum(tochek) {
  let strings = tochek.toString();

  let hold = 0; // hold the number which is original armstrong number
  for (let i = 0; i < strings.length; i++) {
    hold += Math.pow(strings[i], 3);
  }
  let tonum = Number(hold);
  if (tochek === tonum) {
    return tochek + " is an Armstrong number";
  } else {
    return tochek + " is not an Armstrong number";
  }
}
let Armstrongans = Armstrongnum(153);
console.log(Armstrongans); // finally console log the ans