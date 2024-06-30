const user = function(username){
    if(!username){ //! means jodi username na thake
        console.log('Please Enter UserName');
        return //return er pore func ends
    }
    return `Hi ${username} logged in` //returnbasically returns the value to a variable to store
}

const loggedIn = user('Ahanaf')
console.log(loggedIn);

const shoppingCart = function(...num1){ 
    
    return num1                         
                                        
}

// here we are suing rest opr it is similar to spread but    
// when we use it in different scenario we call it rest or spread
// here we are saying combine all arg and give me back 
// returns an array
const totalPrice = shoppingCart(200 , 300 ,400, 500)
console.log(totalPrice);


const shppingCartV2 = function(val1 , val2 , ...num1){
    return num1
}
console.log(shppingCartV2(200,300,400,500)); //print [400,500] because 200,300 val1 and val2 niye gese

const userObject = {
    username: 'Ahanaf',
    price:200

}

//passing obj
function handleAnyObj(anyObject){
    
    console.log(`Hello username ${anyObject.username} price is ${anyObject.price}`);
}

handleAnyObj(userObject)

//passing array

const myNewArray = [200,300,400]

function secondValue(anyArray){
    console.log(anyArray[1]);
}

secondValue(myNewArray)