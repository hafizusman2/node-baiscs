// var m = require("./bmm.js");
// console.log("3 + 5: " + m.add(3, 5));
// console.log("4 x 5: " + m.multiply(4, 5));
// console.log("4!: " + m.factorial(4));

// console.log(parseInt(16, 10));
var http = require("http");
http
  .createServer((req, res) => {
    // res.writeHead(200, { "Content-Type": "text/plain" });
    // res.end("Hello World!\n");
    res.end(`
        <!doctype html>
        <html>
        <body>
            <form action="/" method="post">
                <input type="text" name="fname" /><br />
<button>Save</button>
            </form>
        </body>
        </html>      `);
  })
  .listen(1337, "127.0.0.1");
console.log("Server running at http://127.0.0.1:1337/");

// var url = require("url");
// const { compileFunction } = require("vm");
// var adr = "http://localhost:8080/default.htm?year=2017&month=february";
// var q = url.parse(adr);
// console.log(q.host); //returns 'localhost:8080'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search); //returns '?year=2017&month=february'
// var qdata = q.query; //returns an object: {year: 2017, month: 'february'}
// console.log(qdata.month);
