var static = require("node-static"),
  port = 3001,
  http = require("http");

//config

var file = new static.Server("./public", { cache: 3600, gzip: true });
//serve
http
  .createServer((request, respone) => {
    request
      .addListener("end", () => {
        file.serve(request, respone);
      })
      .resume();
  })
  .listen(port);
