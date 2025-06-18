// ==================================================================================================
// // todo)) Make a web server in Express js 🚂
// const express = require('express'); // import express
// const app = express();

// //* Routes 🛣️
// // default route or home route 🏠
// app.get('/', (req, res) => {
//   res.send('Home Page 🏠');
// });

// // syntax -> app.httpMethodName("/routeName", (req,res) =>{})
// app.get('/idli', (req, res) => {
//   res.send('Idli is ready');
// });

// app.get('/biryani', (req, res) => {
//   res.send('Biryani is ready');
// });

// app.listen(5000, () => {
//   console.log('Server is running on port 5000');
// });

// ==================================================================================================
// //todo)) Make a web server 🌐 using pure Nodejs (not using Express)
// // Server is a computer that sends/serves data to client (frontend)
// // hypertext transfer protocol -> http -> set of rules to set data, receive data, delete data, update data, etc
// // we have used in-built http module
// const http = require('http');
// // create a server 💻
// const server = http.createServer((request, response) => {
//   // this response data would be send to frontend
//   if (request.url === '/') {
//     response.end('Welcome to our home page');
//   } else if (request.url === '/company') {
//     response.end('Welcome to our company page');
//   } else if (request.url === '/about') {
//     response.end('This is  about section');
//   } else {
//     response.end('404 Not Found');
//   }

//   // response.end('Hello from backend ');
// });
// // url/ API -> http://localhost:5000
// //! ROUTES
// // /home  -> http://localhost:5000/home -> should go to home page
// // /about  -> http://localhost:5000/about -> should go to about page

// // start the server on port 5000
// server.listen(5000, () => {
//   console.log('Server is running');
// });
