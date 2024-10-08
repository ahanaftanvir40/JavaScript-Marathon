function priceCalculator(item, price) {
    this.name = item
    this.price = price
}

priceCalculator.prototype.print = function () {
    console.log(`Name is: ${this.name} & Price is: ${this.price}`);
}

priceCalculator.prototype.Increase = function () {
    this.price++
}

const burger = new priceCalculator('Sausage Burger', 250)

console.log(burger);

burger.print()
burger.Increase()
burger.print()

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
then constructor er sathe prototype linked hoy.
*/

/*
Basically new keyword add korle js ekta object ney then protype inject kore then attaches my own created method inside the prototype then amader defined func er basis e create hoy.
*/

function Register(name, age) {
    this.name = name
    this.age = age
    this.print = function () {
        console.log(`Name is ${this.name}`);
    }
}

const user1 = new Register('Ahanaf Reg', 24)
console.log(user1);
user1.print()




let UserName = 'Ahanaf    '

String.prototype.trueLength = function () {
    console.log(`True Length is: ${this.trim().length}`);
}

UserName.trueLength()


