// it also takes a cb and inside cb a paramter here 'item' 
// item consists each array value and we can do anything o it
// the difference here between forEach and map is it returns values and we can store it in a variable


const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newArr = numArr.map((item) => item + 10)
console.log(newArr);

// Chaining

let myArr = numArr.map((item) => item * 10).map((item) => item +1)

// here we will get 10,20,30.. in first map in second map, inside the cb func and in the item parameter
// we will get the previous item value in this case 10,20,30... and then add 1 to each values then return

console.log(myArr);


// we can also add filter if we want 
let myArray_2 = numArr.map((item) => item * 10).map((item) => item +1).filter((item)=> item >=40)
console.log(myArray_2);
//test