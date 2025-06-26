const http = require('http');
const port = 3000;
const version = 'v1'; // will update this in next rollout
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.end(`Hello from Node.js App - Version ${version}\n`);
});
server.listen(port, () => {
console.log(`Server running at port ${port}`);
})
