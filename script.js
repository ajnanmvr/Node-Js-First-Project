var http = require('http')
var fs = require('fs')
var url = require('url')

http.createServer(function  (req,res) {

    var q = url.parse(req.url,true)
    //q.pathname

    if(q.pathname==="/"){
        fs.readFile('index.html', function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()})
    }
    else if (q.pathname === "/login"){
        fs.readFile('login.html', function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        res.end()})
    }        
    else if (q.pathname === "/loginaction") {
        res.writeHead(404,{'Content-Type':'text/html'})
        res.write("<h1>"+q.query.psw +"</h1>")
        res.end()
    } 
                  else{
        res.writeHead(404,{'Content-Type':'text/html'})
        res.write("error")
        res.end()
    }       


}).listen(7000,()=> console.log("prgm running"))
