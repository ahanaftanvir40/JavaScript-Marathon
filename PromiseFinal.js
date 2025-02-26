

const test = new Promise((resolve ,rej)=>{
    let res = 0
    
    if(res === 0){
        resolve('Response Found')
    }else{
        rej("error response")
    }
}).then((value) => console.log(value))

async function PromiseDisplay(){
let test2 = new Promise((res , rej) => {
    let a = 1
    
    if(a===1){
        res('Resolved Promise')
    }else{
        rej('Rejected Promise')
    }
})

let PromiseValue = await test2
console.log(PromiseValue)

}


PromiseDisplay()


//here resolve is basically we hold the value of response.
// we use promise when we think something can take time and after getting that something we need to do something else with it.
//for example our axios or fetch req can take time to get response
// we write resolve(response.data) so resolve basically passes the data to the promise variable if it get the data without any error.
// and passes the value of resolve to .then((value) => console.log(value)) . here value is basically the response.data

// what is await? so await is basically we dont need to write .then((value) => do something). instead we can create a async wrapper and hold the promise resolve value in a variable like below.
// let PromiseValue = await PromiseVariableName and then simply call the async wrapper function
