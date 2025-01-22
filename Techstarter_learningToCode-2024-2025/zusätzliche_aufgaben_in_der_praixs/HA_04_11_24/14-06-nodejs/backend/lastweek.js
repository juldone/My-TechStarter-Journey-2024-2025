import http from 'http';
console.log("Server is Online")

const server = http.createServer((req, res) =>{
    console.log(req.url)
    console.log(req.method)
    res.end("Hello From Node.js")
})

server.listen(4000)