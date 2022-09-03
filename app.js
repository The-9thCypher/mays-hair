const http = require("http");
const fs = require('fs');
const login =  fs.readFileSync('login-page.html', 'utf-8');
const style = fs.readFileSync('style.css', 'utf-8');
const image1 = fs.readFileSync('IMG-20220411-WA0393.jpg');
const image2 = fs.readFileSync('IMG-20220411-WA0390.jpg');
const welcome = fs.readFileSync('welcome.html', 'utf-8');


const server = http.createServer((req, res) =>{
    console.log(req.url)
    if (req.url === '/login-page.html'){
        res.statusCode = 200;
        res.end(login)
    }
    if (req.url === '/style.css') {
        res.statusCode = 200;
        res.end(style)
    }
    if (req.url === '/IMG-20220411-WA0390.jpg'){
        res.statusCode = 200;
        res.end(image2)
    }
    if (req.url === '/IMG-20220411-WA0393.jpg'){
        res.statusCode = 200;
        res.end(image1)
    }
    if (req.url === '/mays-hair'){
        res.statusCode = 404;
        res.end(welcome)
    }
})

server.listen(5000, () => {
    console.log('server listening at 5000')
})
