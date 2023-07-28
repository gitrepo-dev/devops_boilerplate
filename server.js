const http = require("http")


http.createServer((req, res)=>{
  res.write("hello world")
  res.end()
  console.log("server is runing 500")
}).listen(5000)