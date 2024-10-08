class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    static createId() {
        return `123`
    }

    printUser() {
        console.log(`User Details : ${this.name} , ${this.email}`);
    }
}

class Teacher extends User {
    constructor(name, email, age) {
        super(name, email)
        this.age = age
    }
}


const teacher = new Teacher('Ahanaf', 'ahanaf@gmail.com', '24')
teacher.printUser()
// console.log(teacher.createId()) not possible because it is a static method. it basically restricts child or instance from accessing it.
