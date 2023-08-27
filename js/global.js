/**
 * A/N
 * 
 */

// console.log(global)

//this is only going to run the function once after one second
/*global.*/setTimeout(() => {
    console.log('in the timeout');
    //this line will run once 3 seconds has been reached, in which case int will stop
    clearInterval(int)
}, 3000);

//this will run the function every second
const int = setInterval(() => {
    console.log('in the interval');
}, 1000);

/*fetches the absolute path of the current folder*/
console.log(__dirname); 

//fetches the absolute path of the current folder with the file name added
console.log(__filename);