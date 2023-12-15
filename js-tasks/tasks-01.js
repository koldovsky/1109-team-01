// https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89/train/javascript

function mouthSize(animal) {
  if (animal.toLowerCase() === "alligator") {
    return "small";
  } else {
    return "wide";
  }
}



// 1.Grasshopper - Messi goals function - https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
  
// 2.Return Negative - https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
function makeNegative(num) {
  return num > 0 ? -num : num;
}

// 3.Grasshopper - Terminal game move function - https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
function move (position, roll) {
  return position + roll * 2;
}

// 4.Grasshopper - Personalized Message - https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
function greet (name, owner) {
  return name === owner ? 'Hello boss' : 'Hello guest';
}

// 5.Keep Hydrated! - https://www.codewars.com/kata/keep-hydrated-1/train/javascript
function litres(time) {
  return Math.floor(time*0.5);
}

// 6.Opposites Attract - https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
// var1
function lovefunc(flower1, flower2){
  return (flower1 + flower2)%2 !== 0;
}
// var2
function lovefunc(flower1, flower2){
  return Boolean((flower1+flower2)%2);
}
