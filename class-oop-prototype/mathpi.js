// Why we can't change math.pi value? yes we know it is a constant but what is happening underneath


// const myobj = {
//     username : 'Aahanaf',
//     email:'Ahanaf@gmail.com'

// }

// console.log(Object.entries(myobj));

// let [key , value] = Object.entries(myobj)

// for (let [key, value] of Object.entries(myobj)){
//     console.log(`${key} ${value}`);
// }

// was testing how entries work lol.


console.log(Math.PI);
Math.PI = 5
console.log(Math.PI); //it didnt change obv

const descreptor = Object.getOwnPropertyDescriptor(Math , 'PI')
console.log(descreptor);
/*
output:
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

// here writable is false means we can't overwrite it. we can't see this property in browser prototype

let chai = {
    name: "Masala Chai",
    price: 250
}

// chai.price = 300
// console.log(chai) 

const chaiDescreptor = Object.defineProperty(chai , 'price' , {
    writable:false
})

chai.price = 400
console.log(chai);

//we cant't change it no more

