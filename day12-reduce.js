const myArr = [1, 2, 3]

const reducedArr = myArr.reduce((accumalator , currentValue)=> {
    console.log(`accumalator: ${accumalator} and currentValue: ${currentValue}`);
    return accumalator + currentValue
}, 0)

console.log(reducedArr);