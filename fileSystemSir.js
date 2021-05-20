let fs = require('fs');
let data=fs.readFileSync('abc.txt');
console.log(data.toString());
let wdata = 'This is some demo data that i want to write';
fs.writeFileSync('write.txt',wdata);
fs.appendFileSync('write.txt','this is append data');
// fs.unlinkSync('write.txt');
// fs.mkdirSync('Other');
//console.log(fs.existsSync('D:/bits.txt')); => in this we're copying the file path to check its existenxe