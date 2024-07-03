const score = 200

if(score > 100) console.log('score is greater than 100'); // this is impicite scope

const num = 500 
if(num > 100) console.log('test1'),
console.log('test2'); //we can also write mutiple line usig comma but this is very unreadable.


// && use hoy when both conditon true naki check kori 3/4 ta o check possible.

// || use hoy jokhn jekono ekta conditon true holei hobe 3/4 ta condition o check possible.

const userLoginGoogle = false
const userLoginEmail = true 

if(userLoginGoogle || userLoginEmail){
    console.log('User Logged in');
} //print use logged in because one of the condition is true.

if(userLoginGoogle && userLoginEmail){
    console.log('user Logged in');
}else{
    console.log('please sign up');
} //print please sign up because both the condition is not true.

// Nullish Coalescing Operator ?? : nul undefined
// basically jodi null or undefined ashe tahole safety er jonno

const val1 = null ?? 10
console.log(val1); //logs 10 because null ase

//if there is no null it prints the first value assigned

const val2 = 5 ?? 10
console.log(val2); //logs 5 because first value null / undefined nah


// Ternary Operator
const val3 = 10
val3 === 10 ? console.log('value is 10') : console.log('value is not 10');
// ? this means jodi eita hoy tahole eita koro na hole eita koro