const userEmail = 'ahanaf@gmail.com'
const emptyEmail = ''
if(emptyEmail){
    console.log('UserEmail found');
}else{
    console.log('No UserEmail Found');
}

// here we assigned a string to userEmail but we didnt compare anything to get true or false
// this means the assigned userEmail string value automatically considered as true 
// if we give empty string it will automatially considered as false

// falsy values:
// false, 0 , -0 , BigInt 0n, '' , null, undefined, NaN (not a number)

// truthy values:
// "0" (because it is inside a string) , 'false'(again inside a string), " " (space dileo truthy), [], {} , function(){}
