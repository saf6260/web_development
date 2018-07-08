//Notes on promises

const promise = new Promise((resolve, reject) => {
    if(true) {
        resolve('stuff worked');
    } else {
        reject('Error, it broke');
    }
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100 'HIII')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "pookie")
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, "is it me you're looking for?")
})

Promise.all([promise, promise2, promise3, promise4])
    .then(values => console.log(values));

promise
    .then(result => result + "!");
    .then(result => console.log(result2 + "?"));
    .catch(() => console.log("error!")); //Only runs on items that precede the catch statement
    .then(result3 => result3 + '!');

//Part 2 (good application of promises

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/users',
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('error'));
