console.log(null > 0); //here comparison changes null to a number here it converts it to 0
console.log(null == 0); // here equality doesnt change it to a number hence it returns false
console.log(null >= 0); //here 0 is equal or greater than 0 so it returns true because comparisons converts null to 0

// === is strict check it also checks the data type.

//data types are two types based on how we store them in the memory and how we access them

//primitive and Non-primitive

//Primitive: memory location copy kore dey not original location changes happens in the copy
// 7 categories : String, Number , Boolean , null, undefined , Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //prints false because by using symbol we make things unique



//Reference Type (Non-Primitive): direct memory location dey

//Array, Objects, Functions
//Non Primitive data type shob 'function' e hoy ar function er data type 'object function'

//Stack and Heap Memory

// Stack(Primitive) , Heap(Non-Primitive)

//Stack e copy thake  location er ar Heap e Reference of original location


const gameName = new String('flappybirb')

//console.log(gameName.__proto__);

console.log(gameName.length);

const sliceGameName = gameName.slice(3, 6) //3 included 6 excluded
console.log(sliceGameName);
