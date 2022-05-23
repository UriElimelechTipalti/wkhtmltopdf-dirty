const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const print = s => {
    console.log(s)
}

const server = http.createServer((req, res) => {
  res.statusCode = 302;
  print(res.statusCode)
  res.setHeader('Location', 'file:///Windows/system32/drivers/etc/hosts');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// document.write(`<iframe src="http://"></iframe>`)