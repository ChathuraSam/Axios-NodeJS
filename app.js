/**
 Created on 2022/Jul/15
 This is using https://reqres.in/api/

 This includes images too. That is include as,
 {
    ...
    "avatar":"https://reqres.in/img/faces/7-image.jpg"
    ...
 }
 */
const http = require('http');
const axios = require('axios');

const host = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'applicatin/json');
    console.log("Running!")

    // getAllUsers();
    // getUserById(1);
    createUser();

}).listen(port, host, () => {
    console.log(`server running at: ${host}:${port}`);
});

async function getAllUsers() {
    try{
        const response = await axios.get(`https://reqres.in/api/users?page=2`);
        console.log(response.data);
    } catch(error) {
        console.log(error)
    }
}

async function getUserById(id) {
    try {
        const response = await axios.get(`https://reqres.in/api/users/${id}`);
        console.log(response.data);
    } catch(error) {
        console.log(error);
    }
}

async function createUser() {
    try {
        const response = await axios.post(`https://reqres.in/api/users`,
            {
                "name": "morpheus",
                "job": "leader"
            }
        );
        console.log('User created!');
        console.log(response.data);
    } catch(error) {
        console.log(error)
    }
}

