const marvel_heros = ['Spiderman', 'Thor', 'BlackPanther', 'Ironman']
const dc_heros = ['Batman', 'Superman', 'Flash']

//marvel_heros.push(dc_heros) //here array er bhitore  5th index e pura dc_heros array chole jabe
//array inside array hoye jabe

console.log(marvel_heros);

//const all_heros = marvel_heros.concat(dc_heros) //concat new arr a return kore so var e store korte hobe and array of array hoy na actually join kore
//console.log(all_heros);

//we can do the same using spread operator.
//think of it like a glass if we drop it the glasses will spread

const all_heros = [...marvel_heros, ...dc_heros]
//... means shob elem individual hoye gese ar array nai
console.log(all_heros); //same as concat

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] //how to handle this situation

const handled_array = another_array.flat(1) //1 dile 1 ta depth thik korbe Infinity dite parbo taile joto depth thakuk thik kore dibe
const handled_array2 = another_array.flat(Infinity)
console.log(handled_array);
console.log(handled_array2);

//to check and convert Array

console.log(Array.isArray('Tanvir')); //returns false
console.log(Array.from('Tanvir')); //returns [T, a, n ,v , i ,r]
console.log(Array.from({ name: 'Ahanaf' })); //returns [] cant transform to array because we need to tell key or value diye array banao

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //variables diye array banay




