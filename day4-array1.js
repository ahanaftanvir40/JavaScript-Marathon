const myArr = [0, 1, 2, 3]
const myHeros = ['Spiderman', 'Thor', 'Black Panther']


//Array Methods

myArr.push(6) //push 6 to the array
myArr.pop() //remove last value

myArr.unshift(4) //adds infront of array but not good because we have to shift the whole array
myArr.shift() // removes the first value

console.log(myArr.includes(9)); //returns boolean type jodi thake true na thakle false
console.log(myArr.indexOf(9)) //returns -1 means nai thakle index dibe

const newArr = myArr.join() //converts to string values
console.log(myArr.toString()); //also converts to string
console.log(myArr);
console.log(newArr);

//slice - splice

//slice doesnt change the original array but splice changes the original array

console.log('A' , myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log('B' , myArr);
const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C" , myArr); // original array e change hoye gese