function User(name, age, email) {

    this.username = name
    this.age = age
    this.email = email

    //we dont have to return this it autamtiacally does this

}
User.prototype.grettings = function () {
    console.log(`Hey User : ${this.username}`);
}
// 'this' keyword is basically ke call korse or reference.

const UserOne = new User('Ahanaf', 20, 'ahanaf.tanvir@gmail.com')
console.log(UserOne);
console.log(UserOne.grettings());
console.log(UserOne.constructor); //reference of the instance



// then after class was introduced:
class UserClass {
    constructor(name, age, email) {
        this.name = name
        this.age = age
        this.email = email
    }

    printUser() {
        console.log(`UserName : ${this.name} , Age: ${this.age} , Email: ${this.email}`);
    }
}

const UserOneWithClass = new UserClass('Ahanaf Class', 24, 'ahanaf.tanvir@gmail.com')
console.log(UserOneWithClass);