var fs = require("fs"); // require is a Node module call
// fs object wraps OS sync file system calls
// OS read() is synchronous but Node's fs.readFile is asynchronous
fs.readFile("smallFile", readDoneCallback); // Start read
function readDoneCallback(error, dataBuffer) {
  // Node callback convention: First argument is JavaScript Error object
  // dataBuffer is a special Node Buffer object
  if (error) {
    console.log("File not exist");
  } else {
    console.log("smallFile contents", dataBuffer.toString());
  }
}
