const fs = require("fs");
const path = require("path");

// Create folder
fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
  if (err) throw err;
  console.log("Folder Created...");
});


// Create and write to Files
fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "Hello Aisha",
  (err) => {
    if (err) throw err;
    console.log("File Written to...");

    // File Append should be added in the callback;
    fs.appendFile(
      path.join(__dirname, "/test", "hello.txt"),
      " I love Node.js",
      (err) => {
        if (err) throw err;
        console.log("File Written to...");
      }
    );
  }
);


// Rename File
fs.rename(
  path.join(__dirname, "/test", "hello.txt"),
  path.join(__dirname, "/test", "hellonode.txt"),
  (err) => {
    if (err) throw err;
    console.log("File renamed");
  }
);


// Read file
fs.readFile(
  path.join(__dirname, "/test", "hellonode.txt"),
  "utf8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);
