
//file base module
// const a = 20;

// console.log(a);

// module.exports = a;
//this is the file base module,bultd in ,third-party

//build-in modeules

// const fs = require("fs");

// const a = "This is my First Project In MERN STACK";
// fs.writeFileSync("./sample.txt",a);

// console.log("This is first");

// console.log(fs);


//path
// const path = require("path");

// b = "/6pp"
// const a = path.extname("/node/index.js");
// const a = path.basename("C:\\Users\\AL-FATAH LAPTOP\\OneDrive\\Desktop\\Node practice");
// const a = path.join("C:\\Users\\AL-FATAH LAPTOP\\OneDrive\\Desktop\\Node practice"+b);
// console.log(a);


//3rd party modules
// const os = require("os");

// console.log(os.freemem());

// const pokemon = require("pokemon");
// console.log(pokemon);

// const nodemon = require("pokemon");
// console.log(nodemon);


const port = 4000; // Choose a port number above 1024
const hostname = "localhost";
const http = require("http");

const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.end("<h1>HOME PAGE</h1>");
    }
    if(req.url === '/about') {
        res.end("<h1>ABOUT PAGE</h1>");
    }
    if(req.url === '/contact') {
        res.end("<h1>CONTACT PAGE</h1>");
    }
    if(req.url === '/service') {
        res.end("<h1>SERVICE PAGE</h1>");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server is working on http://${hostname}:${port}`);
});
