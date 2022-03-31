const fs = require("fs");

// fs.writeFile("read.txt", "Today is awesome day :)", (err) => {
//     console.log("files is created");
//     console.log(err);
// });

fs.readFile("read.txt", "UTF-8", (err, data) => {
    console.log(data);
});


// We pass them a function as an argument - a callback - that gets called when that task completes.
// The callback has an argument that tells you whether the operation completed successfully.
// Now we need to say what to do when fs.writeFIle has completed (even if it's nothing), and start checking for errors.
