// const http = require("http");

// // create a server
// const server = http.createServer((request, response) => {
//     if (request.url === "/home") {
//         response.end("home");
//     } else if (request.url === "/about") { // Corrected condition
//         response.end("about");
//     } else {
//         response.end("404");
//     }
// });

// server.listen(5000, () => {
//     console.log("Server is running on port 5000");
// });


const express = require('express');
const app = express();

app.get('/idli',() => {})
app.get('/biriyani',() => {})

app.listen(5000, ()=> {
    console.log("Server is running on port 5000");
});