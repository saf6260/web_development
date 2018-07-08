//Async Await Notes

movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'left'))
    .then(() => movePlayer(10, 'right'))
    .then(() => movePlayer(330, 'left'))
// Old way with promises how to complete this action above
// Promises are a 'promise' to you to complete a task

// New form with async await below (makes it easier to read)
 async function playerStart() {
     const firstMove = await movePlayer(100, 'Left'); //pause
     await movePlayer(400, 'Left'); //pause
     await movePlayer(10, 'Right'); //pause
     await movePlayer(330, 'Left'); //pause
 }

//Example 2 to show clearer functionality 
fetch('htps;//jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log);

async function fetchUsers() {
    const resp = await fetch('htps;//jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    console.log(data)
}

//Example 3 to show how to clean up previous promise example

const urls= [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/users',
]

const getData = async function() {
    try {
        const [users, posts, albums] = await Promise.all(urls.map(url => 
            fetch(url).then(resp => resp.json)
        ))
        console.log('users', users)
        console.log('posts', albums)
        console.log('albums', albums)
    } catch (err) {
        console.log('oops', err);
    }
}
