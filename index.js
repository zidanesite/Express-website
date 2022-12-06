const express = require('express');
const path = require('path');
const server = express('server');


// const AllRequestHandler = (req, res) =>{
    
//         res.send('Done');
//     }






    server.use(express.static(path.join(__dirname,'public')));
    // server.post("/", AllRequestHandler);

server.listen(3003,() => console.log('Server is ready'));