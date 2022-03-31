const fs = require("fs");

// Creating a new file
// fs.writeFileSync('read.txt', "Welcome Here");

// Overright sentence exiting file
fs.writeFileSync('read.txt', "Welcome Node");

// Add new line exiting file
fs.appendFileSync("read.txt", " Add a new sentence");

// Read file data
// fs.readFileSync("read.txt");

const buf_data = fs.readFileSync("read.txt");
// console.log(buf_data);

// Node.js includes an additional data type called buffer
// (Not available in browser's javascript).
// Buffer is mainly used to store binary data,
// While reading from a file or receiving packets over the network.

// File read binary to string 

org_data = buf_data.toString();
// console.log(org_data);

// Rename file name
fs.renameSync("read.txt", "readwrite.txt");
