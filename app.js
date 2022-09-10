const http = require("http");
const fs = require('fs');
const authentication = require('authentication');
const login =  fs.readFileSync('login-page.html', 'utf-8');
const style = fs.readFileSync('style.css', 'utf-8');
const script = fs.readFileSync('script.js', 'utf-8');
const image1 = fs.readFileSync('IMG-20220411-WA0393.jpg');
const image2 = fs.readFileSync('IMG-20220411-WA0390.jpg');
const signup = fs.readFileSync('signup.html', 'utf-8');
const css = fs.readFileSync('Sign.css', 'utf-8');



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
    if (req.url === '/signup.html'){
        res.statusCode = 200;
        res.end(signup);
    }
    if (req.url === '/Sign.css'){
        res.statusCode = 200;
        res.end(css)
    }
    if (req.url === '/script.js'){
        res.statusCode = 200;
        res.end(script);
    }
    if (req.url === './login-page.html?username=shylon&password=shyshyshyllon'){
        res.statusCode = 200;
        res.end(signup)
    }
})

server.listen(5000, () => {
    console.log('server listening at 5000')
})
