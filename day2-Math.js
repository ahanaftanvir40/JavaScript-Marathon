console.log('hello');
console.log('world')
console.log('from console');

const gameName = "FlappyBird"

const slicedGameName = gameName.slice(-8, 4)
console.log(slicedGameName);

const number = 1000000

console.log(number.toFixed(1)); //1 ghor decimal

console.log(number.toLocaleString('en-IN')); //shows in indian rupee format

console.log(Math.abs(-4)); //neg pos kore dey
console.log(Math.round(4.3)); //rounds the value to 4
console.log(Math.ceil(4.2)); //takes the next int even it is 4.1
console.log(Math.floor(4.9)); //takes 4 even it is 4.9
console.log(Math.min(4,2,1)); //returns min val
console.log(Math.max(4,2,1)); //returns max val

console.log(Math.random()); //gives random val between 1 and 0


const min = 25
const max = 30
console.log(Math.floor((Math.random() * (max-min +1)) + min));

//here we are using floor to floor the val then using random to 
//generate random number between 0-1 then we are multipying it
//by this formula basically setting the range (max-min +1) this
// +1 basically avoids the 0 case. then we are adding the min value
//to determine the lowest val is 25 in this case

