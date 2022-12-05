// const {readFileSync, writeFileSync, appendfile} = require('fs') // synchronous
// //same as - const fs = require('fs');
// //          fs.read
// const first = readFileSync('./content/first.txt', 'utf8');
// const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first, second);

// // $ node app
// // Hello this is first text file Hello this is second text file   

// writeFileSync('./content/result-sync.txt',
// `Here is the result : ${first}, ${second}`, { flag: 'a'} // Template string. If the file is there, node will overwrite all the values, if not , it will create the file. flag 'a' will append and make 
// );

// Hello this is first text file Hello this is second text fileHello this is first text file Hello this is second text file   

// run $node app
// will create new result-sync.txt file from first & second files. Above you have template string and interpolation. 

const {readFileSync, writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync('./content/result-sync.txt',
`Here is the result : ${first}, ${second}`,
{ flag: 'a'}
);

console.log ('done with this task');
console.log ('starting the next one');
   