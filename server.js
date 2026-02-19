const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.createReadStream(path.join(__dirname, 'public', 'index.html')).pipe(res);
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
