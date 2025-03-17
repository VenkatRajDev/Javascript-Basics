// convert forign currency into indian currency

function convertIntoIndinanCurrency(currency, amount) {
  let condition1 =
    currency === `dollor` || currency === `euro` || currency === `pound`;
  let condition2 = typeof amount === "number";
  if (condition1 && condition2) {
    if (currency === `dollor`) {
      let convert = amount * 83.54;
      console.log(`${Math.floor(convert)} rupees`);
    } else if (currency === `euro`) {
      let convert = amount * 90.93;
      console.log(`${Math.floor(convert)} rupees`);
    } else if (currency === `pound`) {
      let convert = amount * 108.18;
      console.log(`${Math.floor(convert)} rupees`);
    }
  } else {
    if (condition1 != true) {
      try {
        throw new ReferenceError(`${currency} is not found`);
      } catch (error) {
        console.log(error);
        console.log(`You can only convert => "dollor","euro","pound"`);
      }
    } else {
      try {
        throw new TypeError(`${amount} is must be in number`);
      } catch (error) {
        console.log(error);
        console.log(`Enter the correct value to get the result`);
      }
    }
  }
}
convertIntoIndinanCurrency(`pound`, 2.0);

/** you can convert forign currency but in the set of rules
 * In the argument currency name must be in lowerCase and amount must be in number datatype
 * not in strings
 */
