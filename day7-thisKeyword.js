const user = {
    username : 'Ahanaf',
    price: 999,
    welcomeMessage : function(){
        console.log(`${this.username} , welcome to our website`); //this means current context here it is this obj
        //console.log(this); //refers to this obj
    }
}

console.log(user);
user.welcomeMessage()

function username(){
    const username = 'Ahanaf'
    //console.log(this.username); //this only works inside object
}
username()

console.log(this); //in ide it shows {} but it is not empty obj log it in browsers console window it the first elem
//that why we can capture onclick etc event