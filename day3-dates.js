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


// let words = ["I Love Python" , "hello world"]

// let EachWords = words.map((word)=> {
//     return word.split(" ")
// })

// console.log(EachWords)

// let words = "I love python"
// console.log(words.split(" "))

let startDate = new Date('2024-12-01T18:00:00.000Z')
let endDate = new Date('2024-12-03T18:00:00.000Z')

console.log(Math.ceil((endDate - startDate)/ (1000 * 60 * 60 * 24)))

// let testDate = new Date('2024-12-01T18:00:00.000Z')
// console.log(testDate.getDate())

// console.log(startDate === endDate)

// unavailableDates = [{start:'2024-12-01T18:00:00.000Z' , end:'2024-12-03T18:00:00.000Z'}]

//   const unavailableDateObjects = unavailableDates.flatMap((dateRange) => {
//     const start = new Date(dateRange.start);
//     const end = new Date(dateRange.end);

//     // Generate all dates in the range between start and end
//     const dates = [];
//     let current = new Date(start);

//     while (current <= end) {
//       dates.push(new Date(current)); // Add the current date to the array
//       current.setDate(current.getDate() + 1); // Move to the next day
//     }

//     return dates;
//   });
//   console.log("unavailableDateObjects:", unavailableDateObjects);


const test = new Date().toISOString() //converts it to string
console.log(typeof test)

