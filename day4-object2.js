//const tinderUser = new Object() //singleton obj

const tinderUser = {} //not signleton


tinderUser.id = '123abc'
tinderUser.name = 'John'
tinderUser.isLoggedIn = false

const regularUser = {
    email: 'Ahanaf',
    fullname: {
        userfullname: {
            firstname: 'Ahanaf',
            lastname: 'Tanvir'

        }
    }

}

console.log(regularUser.fullname.userfullname.firstname);


//how to merge obj
const obj1 = { 1: 'a', 2: 'b' }
const obj2 = { 3: 'c', 4: 'd' }

const obj3 = { ...obj1, ...obj2 }
console.log(obj3);

const alter_obj3 = Object.assign({}, obj1, obj2) //{} because eikhane store hoy naile obj1 e store hobe
console.log(alter_obj3);

console.log(Object.keys(tinderUser)); //array of obj keys
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //ei key ase naki




