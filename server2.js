var http = require("http");
var fs = require("fs");
var url = require("url");

//Create a server

http
  .createServer((request, response) => {
    //Parse the request containing file name
    var pathname = url.parse(request.url).pathname;
    //Print the name of the file for which request is made.
    console.log("Request for " + pathname + " received.");
    if (request.method === "POST") {
      let body = "";
      request.on("data", (chunk) => {
        //chunk is default stream data set
        body += chunk.toString(); //convert Buffer to string
      });
      request.on("end", () => {
        console.log(body);
        response.end("ok");
      });
    }//this file 
    // //Read the requested file content from file system
    // fs.readFile(pathname.substr(1), (err, data) => {
    //   if (err) {
    //     console.log(err);
    //     //HTTP Status: 404 : NOT FOUND
    //     //Content Type: text/plain
    //     response.writeHead(404, { "Content-Type": "text/html" });
    //   } else {
    //     //Page found
    //     //HTTP Status: 200 : OK
    //     //Content Type: text/plain
    //     response.writeHead(200, { "Content-Type": "text/html" });
    //     //Write the content of the file to response body
    //     response.write(data.toString());
    //   }

    //   //Send the response body
    //   response.end();
    // });
  })
  .listen(8081);
//Console will print the message
console.log("Server running at http://127.0.0.1:8081/");
