"use strict";
// this file will read the index.js in each folder. 
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes')

// make express object and initialize
const express = require('express');
const app = express();
// import data and make PORT
const { notes } = require('./db/db.json')
const PORT = process.env.PORT || 3000;

// parse incoming / outgoing JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve all the necessary static front-end files
app.use(express.static('public'));


// use api routes when using '/notes'
app.use('/api', apiRoutes)
// Anytime client navigates to 'hostname.com/' use the routes in htmlRoutes
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`API server on http://localhost:${PORT}`);
});
