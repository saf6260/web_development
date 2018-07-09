/*const http = require('http');

const server = http.createServer((request, response) => {
    //console.log('headers', request.headers)
    console.log('method', request.method)
    console.log('url', request.url)*/
    const user={
        name: "John",
        hobby: "Skating"
    }
/*response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(user));
});

server.listen(3000);
*///Old way of creating servers directly in Node
//Here is the new way with express
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(user)
});

app.listen(3000);
