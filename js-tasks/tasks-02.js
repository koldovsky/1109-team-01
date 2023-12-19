// Convert a string to an array
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

const stringToArray = (string) => string.split(" ");

// DNA to RNA Conversion
// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

const DNAtoRNA = (dna) => dna.replace(/T/g, "U");

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

or;
const min = function (list) {
  return Math.min(...list);
};

const max = function (list) {
  return Math.max(...list);
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
or;

function min(arr, toReturn) {
  if (toReturn === "value") {
    return Math.min(...arr);
  } else {
    return arr.indexOf(Math.min(...arr));
  }
}
// Hard tasks

//A wolf in sheep's clothing
//https://www.codewars.com/kata/a-wolf-in-sheeps-clothing/train/javascript

function warnTheSheep(queue) {
  const animals = queue.reverse();
  for (let animal = 0; animal < animals.length; animal++) {
    if (animals[animal] === "wolf" && animal === 0) {
      return "Pls go away and stop eating my sheep";
    } else if (animals[animal] === "wolf" && animal > 0) {
      return `Oi! Sheep number ${animal}! You are about to be eaten by a wolf!`;
    }
  }
}

//Beginner - Lost Without a Map
//https://www.codewars.com/kata/beginner-lost-without-a-map

function maps(x) {
  const result = [];
  for (el of x) {
    result.push(el * 2);
  }
  return result;
}
or;
function maps(x) {
  return x.map((element) => element * 2);
}

//Find the first non-consecutive number
//https://www.codewars.com/kata/find-the-first-non-consecutive-number/train/javascript

function firstNonConsecutive(arr) {
  let prevNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - 1 != prevNum) {
      return arr[i];
    } else {
      prevNum = arr[i];
    }
  }
  return null;
}
