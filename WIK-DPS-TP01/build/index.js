"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require('http');
const host = 'localhost';
const port = 8000;
const requestListener = function (req, res) {
    if (req.url == '/ping') {
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify(req.headers));
    }
    else {
        res.setHeader("Content-Type", "text/plain");
        res.writeHead(404);
        res.end("");
    }
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://{$host}:{$port}`);
});
