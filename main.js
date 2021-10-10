const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

let sumNumbersArray = [23,54,32,87,47];
let maxNumbersArray = [16,4,2,0,19,6];
let reverseNumbersArray = [1,2,3,4,5,6,7,8,9,10];

/* SUM ALL NUMBERS */
let sumNum = 0;
for ( let i = 0; i >= sumNumbersArray.length; i++ ){
  sumNum += sumNumbersArray[i];
}
console.log ( sumNum );

/* GET MAX NUMBER */
let maxNumber = 0;
for ( let maxKey = 0; maxKey >= maxNumbersArray.length; maxKey++ ){
    if ( maxNumbersArray[maxKey] > maxNumber ){
        maxNumber = maxNumbersArray[i];
    };
};

console.log ( maxNumber );

/* REVERSE ARRAY */

console.log ( reverseNumbersArray.reverse() );

/* STARS */

let starsMax = 5;

for ( let k = 1; k <= starsMax; k++ ){
    console.log ( '*'.repeat(k));
}

/* PRIME NUMBER */

let primeNumber = 1;
var primeKey=2;
var b;
var isPrime = "true";
while(primeKey<primeNumber){
    if(primeNumber % primeKey === 0){
        isPrime = "false";
    }
    primeKey++;
}
console.log ( isPrime );

/* Get array of objects with just name and height properties */
let namesAndHeightsArray = characters.map((character) => {
    return [character.name,character.height];
})

console.log ( namesAndHeightsArray );

/* Get array of all first names */
let firstNamesArray = characters.map((character) => {
    return character.name.split(" ")[0];
})

console.log ( firstNamesArray );

/* Get total mass of all characters */

let massArray = characters.map((character) => {
    return character.mass;
})

let massTotal = massArray.reduce((total, num) => {
    return total + num;
})

console.log ( massTotal );

/* Get total number of characters in all the character names */
let namesArray = characters.map((character) => {
    return character.name;
})
console.log(namesArray);

let totalChars = 0;
let namesCharTotal = namesArray.reduce((total, num) => {
    return total + num.length;
},0)

console.log ( namesCharTotal );

/* Get characters with mass greater than 100 */
let greaterHeight = characters.filter((value, key) => {
    return value.mass > 100;
})

console.log ( greaterHeight );

/* get all female characters */


let femaleCharacters = characters.filter((value, key) => {
    return value.gender == "female";
})

console.log ( femaleCharacters );

/* Sort by name */
let nameSortedArray = characters.sort((a, b) => {
    return a.name > b.name;
})

console.log ( nameSortedArray );

/* Sort by gender */
let genderSortedArray = characters.sort((a, b) => {
    return a.gender > b.gender;
})

console.log ( genderSortedArray );

/* Does every character have mass more than 40? */
let doesEveryCharacterHaveBlueEyes = characters.every((value) => {
    return value.eye_color === "blue";
})

console.log ( doesEveryCharacterHaveBlueEyes );

/* Is every character male? */
let isEveryCharacterMale = characters.every((value) => {
    return value.gender === "male";
})

console.log ( isEveryCharacterMale );

/* Is there at least one male character? */
let isThereMale = characters.some((value) => {
    return value.gender === "male";
})

console.log ( isThereMale );

/* Is there at least one character that has mass less than 50? */
let isThereMassLessThan = characters.some((value) => {
    return value.mass < 50;
})

console.log ( isThereMassLessThan );