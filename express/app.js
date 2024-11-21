const express = require('express');

// Create an instance of the Express application
const app = express();

// Define the port number where the server will listen
const port = 3000;

// Define a route that responds with "Hello, World!"
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
