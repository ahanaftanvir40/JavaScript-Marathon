function setUser(username) {
    this.username = username
    console.log('Called');
}

function createUser(name, email) {
    // setUser(name) but here we are not actually calling it. i mean call hoye reference haray jacche

    setUser.call(this,name) //here we  are holding the reference by using 'call' here we are passing 'this' to use current context of the createUser func
    this.email = email
}


const UserOne = new createUser('Ahanaf', 'ahanaf@gmail.com')
console.log(UserOne);