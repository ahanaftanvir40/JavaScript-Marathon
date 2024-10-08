function setUser(username) {
    this.username = username
    console.log('Called');
}

function createUser(name, email) {
    // setUser(name) but here we are not actually calling it. i mean call hoye reference haray jacche

    setUser.call(this, name) //here we  are holding the reference by using 'call' here we are passing 'this' to use current context of the createUser func
    this.email = email
}


const UserOne = new createUser('Ahanaf', 'ahanaf@gmail.com')
console.log(UserOne);

// after class was introduced: we dont use call like the above

class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    print() {
        console.log(`User Details : ${this.name} , ${this.email}`);
    }
}


class Teacher extends User {
    constructor(name, email, code) {
        super(name, email) //automatically gets the name from the parent class
        this.code = code
    }
}


const TeacherOne = new Teacher('Ahanaf', 'ahanaf40@gmail.com', '123')
console.log(TeacherOne);
TeacherOne.print();