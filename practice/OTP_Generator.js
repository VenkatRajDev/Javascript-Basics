// OTP generator in js

let OTPlength = 4;
let OTP = "";
const generateOPT = function () {
  // this will create an random number upto 1 to 9
  let random = Math.ceil(Math.random() * 9);
  return random;
};

// loop over the function until we get the four password number
for (let i = 0; i < OTPlength; i++) {
  OTP += generateOPT();
}

// bug  fixed code
let split = OTP.split("");
if (split.length === OTPlength) {
  let correctedOtp = split.map((e) => Number(e));
  console.log(correctedOtp.join(""));
} else {
  console.log(`something went wrong`);
}