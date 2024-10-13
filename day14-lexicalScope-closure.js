function init() {
    let name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    displayName();
}
init();

function outer() {
    let username = "hitesh"
    console.log("OUTER", secret);
    function inner() {
        let secret = "my123"
        console.log("inner", username);
    }
    function innerTwo() {
        console.log("innerTwo", username);
        console.log(secret);
    }
    inner()
    innerTwo()

}
outer()
// console.log("TOO OUTER", username); //this will give error


function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();




/*
Lexical Scoping hocche outer func er jinishpati inner func access korte pare oita
closure hocche when we return a func inside a func tokhon khali oi func er nijer jinish jay na. rather oi func er pura lexical scope jay.
*/