const http= require("http")
const hostname = "localhost"
const port = 3333


const server = http.createServer((req, res)=>{
    res.setHeader("Content-type","text/plain")
    res.end("hello world");
})


server.listen (port, hostname, ()=>{
    console.log("Servidor Rodando")
})