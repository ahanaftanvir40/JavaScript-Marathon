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

const promiseFive = new Promise((resolve, reject) => {
    let error = false
    if (!error) {
        resolve({ username: 'JS', password: '123' })
    }
    if (error) {
        reject('Error: Promise Rejected')
    }
})

promiseFive.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
})

//alternative : we can use async await in the place of .then()
async function consume() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consume()

