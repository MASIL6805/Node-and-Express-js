//const http = require('http');
//const fs = require('fs');
//const url = require('url');
const express = require('express');

//now using express
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page');
});
app.get('/about', (req, res) => {
    res.send(`${req.query.name} Welcome to the About Page`);
});

app.listen(8000, () => {
    console.log('Server is listening on port 8000');
});


// function myHandler (req, res) {
//     const log=`${Date.now()}:${req.url} ${req.method} NEW request received\n`;
//     const myURL = url.parse(req.url,true);
//     console.log(myURL);
//     fs.appendFile("log.txt",log,(err,data)=>{
//         switch(myURL.pathname){
//             case '/':
//                 //const username = myURL.query.myname
//                 //res.end(`Hi,${username}`);
//                 res.end('Welcome to the Home Page');
//                 break;
//             case '/about':
//                 res.end('Welcome to the About Page');
//                 break;
//             case '/signup':
//                 if(req.method==='GET'){
//                     res.end('This is the signup page');
//                 }else if(req.method==='POST'){
//                     res.end('Form data submitted successfully');
//                 }
//                 default:
//                 res.end('Error 404: Page Not Found');
//         }

//     });

// }
//const myServer = http.createServer(myHandler);



// const myServer = http.createServer(app);

// myServer.listen(8000, () => {
//     console.log('Server is listening on port 8000');
// });
