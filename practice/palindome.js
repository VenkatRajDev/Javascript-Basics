const palindome = function (value) {
  const condition1 = typeof value === `string`;
  const condition2 = typeof value === `number`;

  if (condition1) {
    const reverse = value.split("").reverse().join("");

    if (reverse === value) {
      return `${value} is palindome`;
    } else {
      return `${value} is not an palindome`;
    }
  } else if (condition2) {
    const reverse = Number(value.toString().split("").reverse().join(""));

    if (reverse === value) {
      return `${value} is palindome`;
    } else {
      return `${value} is not an palindome`;
    }
  } else {
    try {
      throw new TypeError(`Enter proper input datatype to get the output`);
    } catch (typeerror) {
      return typeerror;
    }
  }
};
console.log(palindome(`malayalam`));