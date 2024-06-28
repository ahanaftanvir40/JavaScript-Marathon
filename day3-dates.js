//dates

const newDate = new Date()
console.log(newDate);
console.log(newDate.toString());
console.log(newDate.toDateString());
console.log(newDate.toLocaleString());
console.log(newDate.toLocaleDateString());

const customDate = new Date('2023-01-14')
console.log(customDate.toString());
console.log(customDate.toLocaleString());

const timeStamp = Date.now() //it returns a mili sec value
console.log(timeStamp); 
console.log(customDate.getTime()); //we can retrieve the mili sec val to compare
