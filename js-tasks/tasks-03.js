//Find the smallest integer in the array
//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

//Geometry Basics: Circle Circumference in 2D
//https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript

const circleCircumference = (circle) => 2 * Math.PI * circle.radius;

//Training JS #12: loop statement --for..in and for..of
//https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript

function giveMeFive(obj) {
  const myList = [];
  for (const key in obj) {
    key.length === 5 ? myList.push(key) : null;
    obj[key].length === 5 ? myList.push(obj[key]) : null;
  }
  return myList;
}

// optional in-depth circuit problem 

//Understanding closures - the basics
//https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript

function buildFun(n) {
  const res = [];
  function savePosition(value) {
    return function () {
      return value;
    };
  }
  for (let i = 0; i < n; i++) {
    res.push(savePosition(i));
  }
  return res;
}
