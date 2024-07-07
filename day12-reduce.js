const myArr = [1, 2, 3]

const reducedArr = myArr.reduce((accumalator, currentValue) => {
    console.log(`accumalator: ${accumalator} and currentValue: ${currentValue}`);
    return accumalator + currentValue
}, 0)

console.log(reducedArr);


// reduce basically takes initial accumalator value which we defined as 0
// then it adds the acc value to currentValue basically here acc + currentValue = 0 + 1
// then it takes the result 0+1 = 1 and set this to accumalator
// so now accumalator value is 1 so again acc + currentValue = 1 + 2
// then the result 1+2 = 3
// now acc = 3 so acc + current value = 3 + 3 = 6 final output

// accumalator: 0 and currentValue: 1
// accumalator: 1 and currentValue: 2
// accumalator: 3 and currentValue: 3

// we can also do this 

const arrowReduced = myArr.reduce((acc , curr) => (acc +curr), 0)
console.log(arrowReduced);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const totalPrice = shoppingCart.reduce((acc , curr) => (acc + curr.price) , 0)
console.log(totalPrice);
// here curr is each obj inside the shoppingCart array