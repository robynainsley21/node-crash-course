//the use of express

const express = require('express');

//express app
//this is an invocation of importing express; indirectly calling it
const app = express();

//listen for requests
//returns an instance of the server
app.listen(8080);

/**
 * first argument is the path, second argument is a function that is fired once at that location
 */
app.get('/', (req, res) => {
    /**
     * - infers the type of content that one is trying to send to the browser and automatically sets
     * the content type header [res.setHeader('Content-Type', 'text/html') in server.js]
     * - it also sets the status code
     */
    // res.send('<p>home page</p>');

    /**
     * The first argument is just a relative path, not the proper path of the file, therefore
     * the second argument states the current directory of the file
     */
    res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname});
});