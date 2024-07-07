let programming = ['js', 'py', 'ruby', 'cpp']

const values = programming.forEach((item) => {
    //console.log(item);
    return item
})
console.log(values); // logs undefined
// so forEach doesnt return any items.
// we cant hold any values in a variable so we need to think of something else

// Filter

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numFiltered = numArr.filter((item) => {
    return item > 4

})
console.log(numFiltered);

// numArr.filter((item)=>{}) so filter takes a callback like forEach. 
// inside the callback it takes a parameter here it is 'item' which holds each array value
// then it returns a condition. je je condition ta fullfill korbe oishob item return korbe in a new array
// we have to declare a variable to use filter to hold the filtered values.

// we can also do it  like this

const numFilterAlt = numArr.filter((item) => item > 6) // auto return kore othoba (item > 6)
console.log(numFilterAlt);

// we can aslo do it using forEach but it will take extra work like below

let filteredArr = []

numArr.forEach((item) => {
    if (item > 4) {
        filteredArr.push(item)
    }
})
console.log(filteredArr);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const booksFilterHistory = books.filter((item) => item.genre === 'History')
console.log('Genre is History: ', booksFilterHistory);

const booksFilter = books.filter((item) => item.publish > 2000)
console.log('Published after 2000: ', booksFilter);

const userBooks = books.filter((item)=> item.genre === 'History' && item.publish > 1995)
console.log('Genre Histor and published after 1995: ', userBooks);

// here we are checking two condition and we are using && so both condition has to be true




