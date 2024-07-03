
let myArray = [1, 2, 4, 5]
for(let index = 0; index < myArray.length; index ++){ // 0 INDEX PRINT 1 , 1 PRINT 2 , 2 PRINT 4, 3 PRINT 5 4 IS NOT LESS THAN LENGTH 4 SO STOP
    console.log(myArray[index]);
}
// for(variable declare , condition , increment){}

for(let i = 0; i <= 10 ; i++){
    let counter = i
    console.log('counter :', counter);
}


for (let i = 0; i <= 5; i++) {
    console.log(`Outer Loop Value: ${i}`);
    for(let j = 0; j <= 5; j++){
        console.log(`Inner Loop Value ${j} and Outer Loop Value ${i}`);
    }
}


for (let i = 1; i <= 5; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
        
    }
    
}
// outer loop 0 er jonne inner pura condition porjonto cholbe then abar outer 1 increase then inner abar
// pura cholbe.

// break continue

for (let i = 1; i <= 10; i++) {
    if(i === 5){
        console.log(`Detected 5`);
        break //breaks the loop when 5 is detected
    }
    console.log(`value of i is ${i}`);
    
}
for (let i = 1; i <= 10; i++) {
    if(i === 5){
        console.log(`Detected 5`);
        continue // doesnt break the loop simply skips it when 5 is detected
    }
    console.log(`value of i is ${i}`);
    
}