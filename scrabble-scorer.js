// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

// function oldScrabbleScorer(word) {
// 	word = word.toUpperCase();
// 	let letterPoints = "";
 
// 	for (let i = 0; i < word.length; i++) {
 
// 	  for (const pointValue in oldPointStructure) {
 
// 		 if (oldPointStructure[pointValue].includes(word[i])) {
// 			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
// 		 }
 
// 	  }
// 	}
// 	return letterPoints;
//  }

 function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
         letterPoints += Number(pointValue);
			console.log(`Points for '${word[i]}': ${pointValue}`);
		 }
 
	  }
	}
	return letterPoints;
 }

 function scrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = 0;
   let pointValue;
 
	for (let i = 0; i < word.length; i++) {
      pointValue = newPointStructure[word[i].toLowerCase()]
		letterPoints += pointValue;
			console.log(`Points for '${word[i]}': ${pointValue}`);
		 }
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

let word = "";

function initialPrompt() {
   word = input.question("Let's play some scrabble!\nEnter a word to score: ");
   return (word);
   };

   // console.log(initialPrompt(word));


const VowelBonusPointStructure = {
   1: ['B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Y','Z'],
   3: ['A', 'E', 'I', 'O', 'U']
};

const newPointStructure = transform(oldPointStructure);
// console.log(newPointStructure.x);

function simpleScorer(word){
   word = word.toUpperCase();
   let letterPoints = 0;
   for(let i = 0; i < word.length; i++) {
      letterPoints += 1;
      console.log(`Points for '${word[i]}': ${1}`);
   }
   return letterPoints;
}
      

function vowelBonusScorer (word) {
   word = word.toUpperCase();
   let letterPoints = 0;
   for(let i = 0; i < word.length; i++){
      for (const pointValue in VowelBonusPointStructure){
         if (VowelBonusPointStructure[pointValue].includes(word[i])){
            letterPoints += Number(pointValue);
            console.log(`Points for '${word[i]}': ${pointValue}`);
         }
      }
   }
   return letterPoints;
};


let simpleScore = {
   name: "Simple Score",
   desription: "Each letter is worth 1 point.",
   scorerFunction: simpleScorer
};

let vowelBonus = {
   name: "Bonus Vowels",
   desription: "Vowels are 3 pts, consonants are 1 pt.",
   scorerFunction: vowelBonusScorer
};

let newScrabbleScorer = {
   name: "Scrabble",
   desription: "The traditional scoring algorithm.",
   scorerFunction: scrabbleScorer
};

const scoringAlgorithms = [simpleScore, vowelBonus, newScrabbleScorer];

function scorerPrompt() {
   let index = input.question("Please select a scoring method:\n0 for Simple Score \n1 for Vowel Bonus \n2 Scrabble ");
         // if (scoringAlgorithms == scorerPrompt){
         //    return (scoringAlgorithms[i].ScoreKeeper)
         // }
   return (scoringAlgorithms[index]);
   };
   //console.log(scorerPrompt());
  
   //console.log("algorithm name: ", scoringAlgorithms[i].name);
   //console.log("scorerFunction result: ", scoringAlgorithms[i].ScoreKeeper("JavaScript"));


function transform(oldPointStructure) {
   let tranformedPointStructure = {};
   let letters;
   for (const pointValue in oldPointStructure){
     // oldPointStructure.toLowerCase
     letters = oldPointStructure[pointValue];
     for (let i = 0; i < letters.length; i++){
         tranformedPointStructure[letters[i].toLowerCase()] = Number(pointValue);
     }
   }
   return tranformedPointStructure;
};
// console.log(transform(oldPointStructure));
// console.log(transform(oldPointStructure));
// console.log("Letters with score '4':", oldPointStructure[4]);
// console.log("3rd letter within the key '4' array:", oldPointStructure[4][2]);

// let letters = oldPointStructure[8];
// console.log("Letters with score '8':", letters);
// console.log("2nd letter within the key '8' array:", letters[1]);


function runProgram() {
   let word = initialPrompt();
   let scoringAlgorithm = scorerPrompt();
   console.log(scoringAlgorithm.scorerFunction(word));
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};