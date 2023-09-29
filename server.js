// launching the website from the local to a browser location?
const http = require('http');
const fs = require('fs');
const _ = require('lodash');

/**
 * Saving the server in variable
 * - the first argument is a request obj, and the second is a response obj
 * - the request obj comes loaded with info about the request (the url that is 
 *      being requested, for example)
 * - the respond obj is what we use to send the response to the user in the browser
 */
const server = http.createServer((req, res) => {
    // this callback will run each time a request comes in to the server

    //lodash
    const num = _.random(0, 20);
    console.log(num);

    //using lodash to run a function only once
    const greet = _.once(() => {
        console.log('yesssir');
    });

    greet();
    greet();
    // set header content type
    // sending plain text to the browser
    res.setHeader('Content-Type', 'text/html');

    /**
     * This is the starting point for all the html pages, so we store it in a variable
     */
    let path = './views/';

    switch (req.url) {
        case '/':
            path += 'index.html';
            // setting the status code
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            // this is a permanent redirect for if the user visits this page
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }


    //sending data back to the browser (writing to the response)
    fs.readFile(path, (err, data) => {
        if(err) {
            console.log(err);
            //remember to end the process
            res.end();
        } else {
            // res.write(data);
           
            res.end(data); /* does the same thing but ends the process immediately after */
        }    
    })
});

/**
 * Listens for requests. takes an port number as a first argument, and the local host
 * as a second argument
 */
server.listen(8080, 'localhost', () => {
    // this function will run when the server starts listening
    console.log('listening for requests on port 8080');
})