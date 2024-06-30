function one(){
    const username = 'Ahanaf'

    function two(){
        const webstie = 'Youtube'
        console.log(username); //here we can access username beause it is available to the parent 
        //and parent is the global scope for this func
    }
    //console.log(webstie); //here we cant access anything from child so error
    two()
}

one()

// a good example : children can have ice cream from adults but adults cant snitch ice cream from children


console.log(addOne(5)) //here we can call before declare
function addOne(num1){
    return num1+1
}


// addTwo(num1) // here we cant call before declare before because of hoisting. we will discuss later
//basically remember when we store it in a var we cant call before declaring
const addTwo = function(num1){
    return num1 + 2
}

console.log(addTwo(5))