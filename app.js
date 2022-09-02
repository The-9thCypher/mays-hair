const http = require("http");
const fs = require('fs');
const login =  fs.readFileSync('login-page.html');

const server = http.createServer((req, res) =>{
    console.log(req.url)
    if (req.url === '/'){
        res.end('welcome to mays hair paradise ')
    }
    if (req.url === '/about') {
        res.end('this is out about us page')
    }
    if (req.url === '/login'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end("nreiv qrhbvqbuqbobqibiqebvipei ibvwc");
    }
    // else{
    // res.end('Oops!')
    // }
})

server.listen(5000, () => {
    console.log('server lsitening at 5000')
})