// Convert a string to an array
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

const stringToArray = (string) => string.split(" ");

// DNA to RNA Conversion
// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

function DNAtoRNA(dna) {
  const newRNA = dna.replace("/T/g", "U");
  return newRNA;
}

//Find Maximum and Minimum Values of a List
// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

const min = function (list) {
  for (el of list) {
    if (el < list[0]) {
      list[0] = el;
    }
  }
  return list[0];
};

const max = function (list) {
  for (el of list) {
    if (el > list[0]) {
      list[0] = el;
    }
  }
  return list[0];
};

//Smallest value of an array
// https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

function min(arr, toReturn) {
  let minValue = Infinity;
  for (const num of arr) {
    if (num < minValue) {
      minValue = num;
    }
  }
  return toReturn === "value" ? minValue : arr.indexOf(minValue);
}