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


// challenge Task
// 1: Create a folder named it nodejs | Ex: fs.mkdirSync("node");
// 2: Create a file in it named read.txt and data into it.
// 3: Add more data into the file at the end of the existing data.
// 4: Read the data without getting the buffer data at first
// File encoding
// 5: Rename the file name to readwrite.txt
// 6: Now delete both the file and the folder
