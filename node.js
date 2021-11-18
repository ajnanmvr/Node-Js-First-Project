const url = require('url')
const fs  = require('fs')
const http = require('http')

http.createServer( (req,res)=> {
    const myUrl = url.parse(req.url,true)

    if(myUrl.pathname==="/"){
        fs.readFile('index.html',(err,data)=>{

            res.writeHead(200,{'Content-Type':'text/html'})
            res.write(data)
            res.end()

        })
    } else if (myUrl.pathname === '/login') {
        fs.readFile('login.html',(err,data)=>{

            res.writeHead(200,{'content-type':'text/html'})
            res.write(data)
            res.end()


        })  
    } else if (myUrl.pathname==='/loginaction'){
        fs.readFile('logged.html',(err,data)=>{

            res.writeHead(200,{'content-type':'text/html'})
            res.write(data)
            console.log("|  => "+myUrl.query.uname + " : " + myUrl.query.psw);
            res.end()

        })
    } else {
        res.writeHead(200,{'content-type':'text/html'})
        res.write("<h1> Error </h1>")
        res.end()
    }

}).listen(7000,()=>{console.log('Node Js Started running');console.log(' ');console.log("____________________");console.log("UserName : Password");console.log("____________________");})