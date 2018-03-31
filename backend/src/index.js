// Declares dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const utils = require('./utils');

// Declare the express module
const app = express();

// Define bodyParser and cors settings
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Set route to check if it is a palindrome
app.post('/checkPalindrome', (req, res) => {
    // Declares the parameter received via POST
    const { input } = req.body.query;

    /**
     * If the received value is equal to the reverse, it returns status 200,
     * if it does not return status 400
     */
    const result = utils.checkPalindrome(input);

    if (result) {
        return res.status(200).send(result);
    }
    return res.status(400).send(result);
});

// Binds and listens for connections on port 8080
app.listen(8080);
