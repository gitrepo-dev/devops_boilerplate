const http = require("http")


http.createServer((req, res)=>{
  res.write("hello world")
  res.end()
  console.log("server is runing 5000 chagen")
}).listen(5000)