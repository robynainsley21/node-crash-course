const fs = require('fs') // 'file system'

/**
 * Reading files
 * - this method is asynchronous (takes some time to do)
 * - once it is done, it will fire the callback
 * - does not stop other lines of code from executing, even though it takes time
 * */
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     // callback function will be fired 
//     if(err) {
//         console.log('The following error has occurred: ', err);
//     }

//     console.log(data.toLocaleString())
// })

// console.log('last line')


/**
 * Writing files
 * - the second argument is what you want to replace the content with in the file
 */
// fs.writeFile('./docs/blog1.txt', 'hello', () => {
//     console.log('file was written')
// });

// // what would happen if we were to do the same to a file that didnt exist?
// // the file would be created
// fs.writeFile('./docs/blog2.txt', 'hello again', () => {
//     console.log('file was also written')
// })


/**
 * Directories
 */
//checking if the file exists before it is created
if(!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if(err){
            console.log('The following error occurred: ', err);
        }
    
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets', (err) => {
        if(err){
            console.log(err);
        }
        console.log('Folder deleted');
    })
}



/**
 * Deleting files
 */
if(fs.existsSync('./docs/deleteme.txt')) {
    // unlink is what is used when we want to delete a file
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err) {
            console.log(err);
        }

        console.log('File deleted')
    });
}