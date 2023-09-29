//the use of express

const express = require('express');

//express app
//this is an invocation of importing express; indirectly calling it
const app = express();

//listen for requests
//returns an instance of the server
app.listen(8080);

app.get('/', (req, res) => {
    /**
     * - infers the type of content that one is trying to send to the browser and automatically sets
     * the content type header [res.setHeader('Content-Type', 'text/html') in server.js]
     * - it also sets the status code
     */
    res.send('<p>home page</p>');
});