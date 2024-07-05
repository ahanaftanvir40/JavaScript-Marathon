// for-in we use this to iterate over object

const myObj = {
    js : 'javaScript',
    py: 'Python',
    rb: 'Ruby'
}

for( const key in myObj){ //for-of er moton just 'of' er place e 'in'
    console.log(`key =>${key} ,value => ${myObj[key]} `); // myObject.key dile undefined ashbe
}

// so can we use for-in in array? lets see

let programming = ['js' , 'py' , 'rb']

for(const key in programming){
    console.log(key); // logs 0 1 2
}

//so what went wrong here?
// Arrays also have key and by default it  it starts from 0 and goes on like 0 1 2 3...
// that is why objects were invented so that we can put custom keys.


// so how do we extract the values from the array using for-in

for(const i in programming){
    console.log(programming[i]);
}

//we know the key so extract the key using array[key] key is basically index values