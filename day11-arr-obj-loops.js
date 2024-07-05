let myArray = [1, 2, 3, 4, 5]

// for-of

for(const i of myArray  ){
    console.log(`array values; ${i}`);
}

// using normal for loops
let name = 'Ahanaf'
//console.log(name.length);

for(let i = 0 ; i < name.length; i++){
    console.log(`Each alphabet: ${name[i]}`);
}
// aternative using for of
for(let i of name){
    console.log(`using for of : ${i}`);
}

//for-of => for('variable declare' of 'jare loop korbo myArr or myObj'){console.log(jei var declare korsi oi var e value chole ashbe)}
// no need to increment or anything

// Map

// insert like key - value
// unique values hold kore and jei order e dibo oi order maintain kore

let map = new Map()

map.set('BD' , 'Bangladesh')
map.set('IN', "india")
map.set('Fr' , 'France')
map.set('BD' , 'Bangladesh') //if we try to inser BD again it will not set it because map holds unique values

console.log(map);

for(const i of map){
    console.log(i); // array [ 'BD', 'Bangladesh' ]
                    // [ 'IN', 'india' ]
                    // [ 'Fr', 'France' ]
}

//but we dont want arrays

for(const [key , value] of map){ // [key , value] array destructure
    console.log(`${key} :=> ${value}`);
}

// note ei way te normal object iterate kora jabe na