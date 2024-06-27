// singleton - constructor diye banale singleton diye hoy. ektai obj
Object.create // eita diye singleton hoy

//literals diye banale singleton hoy na

//object literals

const mySym = Symbol('key1')

const jsUser = {
    name: 'Ahanaf',
    email: 'ahanf.tanvir40@gmail.com',
    [mySym]: 'mykey1'
}
console.log(jsUser[mySym]);

//Object.freeze(jsUser) // we can freeze obj so that no one can change anything
console.log(jsUser);

jsUser.greeting = function () { //cant use callback ()=>
    console.log(`Hello JS user ${this.name}`); //'this' refers to the object body

}

console.log(jsUser);
console.log(jsUser.greeting());