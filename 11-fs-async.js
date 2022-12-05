const {readFile, writeFile} = require('fs') // asyncronous -  run callback when you are done.



// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(result) 
// this is where you would set up the functionality. If you don't provide the utf coding you will get a buffer (ie 76 37 6c, etc...)
// })

// result without 'utf8',...
// $ node app
// <Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 66 69 72 73 74 20 
// 74 65 78 74 20 66 69 6c 65>

// result with utf8...
// $ node app
// Hello this is first text file

console.log('start');

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return;
        }
        const second = result;
        writeFile('./content/result-async.txt',
        `Here is the result : ${first}, ${second}` // set up data
        , (err, result)=>{
            if (err){
                console.log(err)
                return;
            }
            console.log('done with this task')
        })
    })   
})
console.log('starting next task');

// result...file create...result-async.txt in file directory
// $ node app
// undefined

//run...node 11-fs-async