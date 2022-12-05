const path = require('path');


//console.log(path.sep); // terminal line separator

const filePath = path.join('/content', 'subfolder','test.txt');

console.log(filePath);

// result...

// $ node app
// \
// \content\subfolder\test.txt

const base = path.basename(filePath);
console.log(base);

// $ node app
// \content\subfolder\test.txt
// test.txt

const absolute = path.resolve(__dirname, 'content', 'subfolder','test.txt');
console.log(absolute);

// result...
// $ node app
// \content\subfolder\test.txt
// test.txt
// C:\Users\Dell\OneDrive\Desktop\node-tutorial\content\subfolder\test.txt