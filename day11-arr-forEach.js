// forEach is inbuilt inside array prototype like a method

const programming = ['js' , 'py' , 'ruby']

// forEach takses a callback ()=>{} and we need to pass a parameter inside the callback (item)=>{}
// the paraneter inside the callback holds each array value.

// programming.forEach(function(item){
//     console.log(item);

// })

// using arrow function
programming.forEach((item)=>{
    //console.log(item);
})

// we can also pass a function reference 
// note we will only pass the reference we will not execute the whole func

function printME (item){
    console.log(item);
}

programming.forEach(printME) // we only gave the reference

//forEach doesnt ony have access to array values it also has access to values , index , the whole array

programming.forEach((value , index , arr)=>{
    console.log(value , index , arr);
})

// array of objects [{}, {}, {}]

const myCoding = [
    {
        language: 'JavaScript',
        languageFile: 'js'
    },
    {
        language: 'Python',
        languageFile: 'py'
    },
    {
        language: 'Ruby',
        languageFile: 'rb'
    }
]

// each object nise then oitar properties . diye access
myCoding.forEach((item)=>{
    console.log(item.language);
})