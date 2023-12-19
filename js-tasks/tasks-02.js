// Convert a string to an array
// https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

const stringToArray = (string) => string.split(" ");

// DNA to RNA Conversion
// https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

const DNAtoRNA = (dna) => dna.replace(/T/g, "U");

//Find Maximum and Minimum Values of a List
// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

const min = function (list) {     // min => findMin
  for (const el of list) {
    if (el < list[0]) {
      list[0] = el;
    }
  }
  return list[0];
};

const max = function (list) {   // max => findMax
  for (const el of list) {
    if (el > list[0]) {
      list[0] = el;
    }
  }
  return list[0];
};

or 
const min = function(list){
  return Math.min(...list);
}

const max = function(list){
  return Math.max(...list);
}

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
or

function min(arr, toReturn) {
  if (toReturn === 'value') {
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

// additional tasks

//You Can't Code Under Pressure #1
//https://www.codewars.com/kata/53ee5429ba190077850011d4/train/javascript

const doubleInteger = (i) => i * 2;

//Century From Year
//https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

const century = (year) => Math.ceil(year / 100);

//Return Negative
//https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

const makeNegative = (num) => -Math.abs(num);

//Beginner Series #4 Cockroach
//https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/train/javascript

const cockroachSpeed = (s) => Math.floor((s * 1000) / 36);

//Angle of triangle
//https://www.codewars.com/kata/5a023c426975981341000014/train/javascript
const otherAngle = (a, b) => 180 - (a + b);

//Twice as old
//https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript

const twiceAsOld = (dadYearsOld, sonYearsOld) =>
  Math.abs(dadYearsOld - sonYearsOld * 2);

//Return n-th even number
//https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript

const nthEven = (n) => (n - 1) * 2;

//What's the real floor?
//https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript

function getRealFloor(n) {
  if (n === 0) {
    return +0;
  } else if (n < 0) {
    return n;
  } else if (n > 0 && n < 14) {
    return n - 1;
  } else {
    return n - 2;
  }
}

//Beginner Series #2 Clock
//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

const past = (h, m, s) => (h * 3600 + m * 60 + s) * 1000;

//Is n divisible by x and y?
//https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript

const isDivisible = (n, x, y) => n % x === 0 && n % y === 0;