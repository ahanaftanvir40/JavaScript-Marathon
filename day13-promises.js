const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('async Task');
        resolve()
    }, 1000)
})

promiseOne.then(() => {
    console.log('Promise Consumed');
})


new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ use: 'Ahanaf', Email: 'ahanaf@gmail.com' })
    }, 1000)
}).then((user) => {
    console.log(user);
})