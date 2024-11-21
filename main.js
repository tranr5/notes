// terminal codes
// ls cd mkdir file=make new folder
// touch file= make new file
// code file = open file
// rm file = remove file   rmdir file = remove folder
// at folder I can type "code ."
// control + C to restart


// Visual Studio Code shortcuts
// control + Backtick (`) = brings up terminal
// 
// git add .
// git commit -m "notess"
// node main.js  = runs the code in terminal

// == : Equal to (loose equality)
// === : Strict equal to (checks both value and type)
// != : Not equal to (loose inequality)
// !== : Strict not equal to
// > : Greater than
// < : Less than
// >= : Greater than or equal to
// <= : Less than or equal to
// 4. Logical Operators:
// && : Logical AND
// || : Logical OR
// ! : Logical NOT
// console.log('science'.indexOf('x') === -1)

// if (condition_1) {
//     statement;
// } else if (condition_2) {
//     statement;
// } else (condition_3) {
//     statement;
// }

// let  n = 0;

// while (n < 7) {
//   n++;
// }
// console.log(n)

// let str = ''

// for (let i = 0; i < 5; i++) {
//     str = str + i;
// }

// console.log(str)

// let str = 'pizza'; // try different strings here
// if (str.length > 10) {
//   console.log('long string');
// } else {
//   console.log('short string');
// }
// if (str[0] === 'p') {
//   console.log('starts with p');
// }
// const exampleFunction = () => {
//     const num = 100
//     console.log(num * num)
//   }
  
//   console.log(exampleFunction())   // num is not available outside the function
  

// this code checks for specific number and also checks for if it is an iteger
//   const checkSquare = () => {
//     const num = 25
//     const squareRoot = Math.sqrt(num)
    
//     if (squareRoot % 1===0) {
//         return squareRoot
//     } else {
//         return "not a perfect square"
//     }
    
//   }
// console.log(checkSquare())



// checks if perfect square alll the way to the num i picked
//   const checkSquare = (num) => {
//     const squareRoot = Math.sqrt(num)
    
//     if (squareRoot % 1===0) {
//         return squareRoot
//     } else {
//         return "not a perfect square"
//     }
    
//   }

// const checkNum = (limit) => {
//     // for int = ""
//     for (let i = 1; i <= limit; i++) {
//         console.log(checkSquare(i))
//     }
// }
// checkNum(100)





// 1.1. What is the difference between a parameter and an argument?

// 1.2. Within a function, what is the difference between return and console.log?

// 1. 3. What are the implications of the ability of a function to return a value?

// 2. calculateCube
// function calculateCube(num) {
//     num = num * num * num
//     return num
// }
// console.log(calculateCube(3))
// 3. isAVowel
// function isAVowel(letter) {
//     return['a','A','e','E','i','I','o','O','u','U'].includes(letter)
// }
// console.log(isAVowel('b'))
// 4. getTwoLengths
// function getTwoLengths(word1, word2) {
//     return [word1.length,word2.length]
// }
// console.log(getTwoLengths("dog","pizza"))
// 5. sumArray
// function sumArray(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         sum = arr[i] + sum 
//     }
//     return sum
// }
// console.log(sumArray([5,5,6,9]))
// 6.1 checkPrime
// function checkPrime(num) {
//     if (num <= 1) return false
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false
//         }
//     }
//     return true
// }
// console.log(checkPrime(91))
// 6.2 printPrimes
// function printPrimes(num) {
//     for (let i = 2; i <= num; i++) {
//         if (checkPrime(i) === true) {
//             console.log(i)
//         }
//     }
// }

// 7. printLongestWord
// function printLongestWord(arr) {
//     let longestWord = ''
//     for (let word of arr) { 
//         if (word.length > longestWord.length) {
//             longestWord = word
//         }
//     }
//     return longestWord
// }
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));

// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
    // YOUR CODE HERE
}

// 9. findNeedle
function findNeedle(arr) {
    // YOUR CODE HERE
}

// 10. sumPositive
function sumPositive(arr) {
    // YOUR CODE HERE
}

// module.exports = {
//     calculateCube,
//     isAVowel,
//     getTwoLengths,
//     sumArray,
//     checkPrime,
//     printPrimes,
//     printLongestWord,
//     eulerFibo,
//     findNeedle,
//     sumPositive
// };
// const game = {title: 'Guess the Number!'};
// console.log(game);


let movies = [ 'Caddyshack', 'Interstellar', 'Scarface', 'Trading Places'];
movies.splice(2, 0, 'Spaceballs', 'Alien');
// console.log(movies); // [ 'Caddyshack', 'Interstellar', 'Spaceballs', 'Alien', 'Scarface', 'Trading Places' ]

let removedMovies = movies.splice(0, 3);
// console.log(movies); // [ 'Alien', 'Scarface', 'Trading Places' ]
removedMovies = movies.splice(1, 0, 'The Sting', 'Another movie');

// console.log(removedMovies); // []

// console.log(movies); // [ 'Alien', 'The Sting', 'Another movie', 'Scarface', 'Trading Places' ]

// movies.forEach(function (movie) {
//     console.log(movie);
//   });

//   movies.forEach(function (movie, idx) {
//     console.log(idx + ") " + movie);
//   });


// for (let movie of movies) {
//     if (movie === "The Last Airbender") break;
//     console.log(movie);
//   }


// const map = function (array, callback){
// 	let output = []
// 	for (let i = 0; i< array.length; i++){
// 		output.push(callback(array[i]))
// 	}
// 	return output 
// }

// const double = function (num) {
// 	return num*2 
// }

// const doubledNumbers = map([1,2,3], double)

// console.log(doubledNumbers)



// const game = {
//     title: 'Guess the Number!',
//     biggestNum: 100,
//   };
// for (let key in game) {
//     console.log(`The value of the ${key} property is ${game[key]}`);
//   }



const batman = {
    persona: "Batman",
    identity: "Bruce Wayne",
    health: 100,
    damage: 30,
    // this is a method 
    revealIdentity(){
      console.log(`I'm ${this.persona}!`);
    },
  
  takeDamage(amount){
    return this.health = this.health - amount;
  }
}
// console.log(batman.takeDamage(10))

const minions = [
	'bob',
	'stuart',
	'dave',
	'jerry',
	'kevin',
	'mark',
	'tim',
	'phil',
	'carl'
];
minions.forEach(function(name) {
    // console.log(name+" - here")
});

// let capitalName = minions.map(function(here) {
//     return here.charAt(0).toUpperCase() + here.slice(1).toLowerCase();
// })
// console.log(capitalName)

// let capitalizedMinion = minions.map(function(name) {
//     if (name != 'kevin') {
//         return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
//     } else {return name }
// })

// // console.log(capitalizedMinion)

// const isCapitalized = (name) => {
//     return name[0] === name[0].toUpperCase(); // Checks if first letter is uppercase
// };
// // const capitalizedMinions = ['Bob', 'Stuart', 'Dave', 'Jerry', 'Kevin', 'Mark', 'Tim', 'Phil', 'Carl'];
// let allCapitalized = capitalizedMinion.every(isCapitalized);

// console.log(isCapitalized);




const solarSystem = [    { name: "Mercury", ringSystem: false, moons: [] }, 
   { name: "Venus", ringSystem: false, moons: [] },
   { name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
    { name: "Earth", ringSystem: false, moons: ["The Moon"] },
    { name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
    { name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
    { name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
    { name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }];

const neptune = solarSystem[7]

// console.log(neptune.moons[1])

// solarSystem.push({name: "Pluto", ringSystem: false, moons:["Clayon"]})

// console.log(solarSystem)
solarSystem[6].moons[3] = "huhiuo"
// uranus.replace("fse")
console.log(solarSystem)