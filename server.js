var http = require("http");
var fs = require("fs");
var url = require("url");
var colors = require("colors");
http
  .createServer((request, response) => {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    console.log(pathname);
    console.log(pathname);
    console.log(pathname);

    fs.readFile(pathname.substr(1), (err, data) => {
      if (err) {
        console.log(err);
        response.writeHead(404, { "Content-Type": "text/html" });
        console.log(pathname);
        console.log(pathname);
        console.log(pathname);
      } else {
        //Page found
        // HTTP Status: 200 : OK
        // Content Type: text/plain
        response.writeHead(200, { "Content-Type": "text/html" });
        // Write the content of the file to response body
        response.write(data.toString());
        console.log(pathname);
        console.log(pathname);
        console.log(pathname);
      }
      // Send the response body
      response.end();
    });
  })
  .listen(8081);
// Console will print the message
console.log("Server running at http://127.0.0.1:8081/".red);
