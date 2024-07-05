let index = 0 
while(index <= 10){
    console.log(`value is ${index}`);
    index = index+2
}

// while (condition){} condition jotokhn fullfill korbe loop hobe and manually increment korte hobe

let myArray = ['falsh' , 'batman' , 'superman']
let arrIndex = 0

while(arrIndex < myArray.length){
    console.log(`Array Values: ${myArray[arrIndex]}`);
    arrIndex++
}

// do - while
// first e kaam pore condition

let score = 1
// let score = 11 // logs score is 11 because condition match kore nai and log age hocche
do{
console.log(`score is ${score}`);
score++
}while(score <= 10)