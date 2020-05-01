const http = require("http");

// function rqListener(req, res) {}

// CALL FUNCTION
// http.createServer(rqListener);

// OLD JAVASCRIPT
// http.createServer(function (req, res) {});

// NEXT-GEN JAVASCRIPT
// http.createServer((req, res) => {});

const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(8000);
