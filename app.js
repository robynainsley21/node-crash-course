//the use of express

const express = require('express');

//express app
//this is an invocation of importing express; indirectly calling it
const app = express();

//register view engine
//alerting the app that ejs will be used to format the views
app.set('view engine', 'ejs');

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
    // res.sendFile('./views/index.html', {root: __dirname});

    /**
     * The previous code was part of introducing express. The following is after ejs is installed.
     * - The 'index' page will be found by ejs and rendered to the browser when on path '/'.
     */
    res.render('index');
});

app.get('/about', (req, res) => {
    // res.sendFile('./views/about.html', { root: __dirname});
    res.render('about');
});

//Redirects
app.get('/about-us', (req, res) => {
    //automatically sets the status code
    res.redirect('/about'); 
});

app.get('/create', (req, res) => {
    res.render('create');
})

//404 Page
/**
 * - The 'use' function wil fire for every single request coming in, but only when the request
 * reaches this point in the code, because all lines of code before will be matched first.
 * - Since this function does not have a path, the browser will return the 404 page when the
 * user visits any other page that isnt the home or about page.
 * - Therefore, this function must be placed at the bottom of the file.
 */
app.use((req, res) => {
    //the browser will not recognize this as a 404, therefore it has to be manually set
    // res.status(404).sendFile('./views/404.html', { root: __dirname});
    res.status(404).render('404');
})