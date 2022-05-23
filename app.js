const express = require('express')
const app = express()
const port = 3000

const print = s => {
    console.log(s)
}

// const server = http.createServer((req, res) => {
//   res.statusCode = 302;
//   print(res.statusCode)
//   res.setHeader('Location', 'file:///Windows/system32/drivers/etc/hosts');
//   res.end('Hello World');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

app.get('/', (req,res) => {
  res.statusCode = 302
  res.setHeader('Location', 'file:///Windows/system32/drivers/etc/hosts');
  res.end('Hello World');
})

app.listen(port, () => {
  print("example")
})

// document.write(`<iframe src="http://"></iframe>`)