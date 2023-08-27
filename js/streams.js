const fs = require('fs');

/**
 * Reading and writing streams
 */
/**
 * First we've set up the data and told node where to fetch the data from
 * The first parameter tells us where we want to read/pass data from
 * The second parameter specifies the encoding (data will automatically be
 * in a readable format)
 */
const readStream = fs.createReadStream('./docs/blog3.txt', { encoding: 'utf8' });
/**
 * This is how we write the stream
 */
const writeStream = fs.createWriteStream('./docs/blog4.txt')

/**
 * The .on() is an event listener, which listens for a data event for every time we receive a 
 *  buffer of data from the created stream
 */
// When the data is received, it generated a chuck and executes the function
// readStream.on('data', (chunk) => {
//     console.log('----- NEW CHUNK -----')
//     console.log(chunk);

//     /**
//      * Each time we get a new chunk of data, we will first write 'NEW CHUNK',
//      * before we write the new chunk
//      */
//     writeStream.write('\nNEW WRITTEN CHUNK\n');
//     writeStream.write(chunk);
// });

/**
 * A shorter way to write streams (piping)
 * Opening up the readStream, reading data, and each time we get a chunk, under the 
 *  hood, its piping the data to the write stream
 */
readStream.pipe(writeStream)