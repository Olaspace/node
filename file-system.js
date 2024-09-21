const fs = require("fs");

// Create a file named "welcome.txt"
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("welcome.txt created");
});

// Read from "hello.txt" (make sure this file exists)
fs.readFile("hello.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
