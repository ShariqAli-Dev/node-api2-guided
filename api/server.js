// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// BREAK UP THIS MONOLITHIC FILE USING ROUTES
// imports
const express = require('express');
const adopterRouter = require('./adopters/adopters-router');
const dogsRouter = require('../api/dogs/dogs-router');

// Initiliaztion of server
const server = express();

// Middleware
server.use(express.json());
server.use('/api/adopters', adopterRouter);
server.use('/api/dogs', dogsRouter);

// OTHER ENDPOINTS
// OTHER ENDPOINTS
// OTHER ENDPOINTS
server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Shelter API</h>
    <p>Welcome to the Lambda Shelter API</p>
  `);
});

module.exports = server;
