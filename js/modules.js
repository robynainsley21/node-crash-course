//importing the 'people' file 
//fetches all the data in the required file
const { people, ages } = require('./people'); /* this is the location; use node module to see result */

console.log(people, ages)

const os = require('os') //'os' refers to the operating system

console.log(os.platform(), os.homedir())