/**
 Created on 2022/Jul/15
 This is using https://reqres.in/api/
 */
const http = require('http');
const axios = require('axios');

const host = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'applicatin/json');
    console.log("Running!")
}).listen(port, host, () => {
    console.log(`server running at: ${host}:${port}`);
});




