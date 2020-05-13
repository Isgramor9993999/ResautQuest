const express = require('express');
const useSocket = require('socket.io');
const app = express();

const server = require('http').Server(app);



const room = new Map();

app.get('/rooms',(req, res)=>{
    rooms.set('hello', '');
    res.json(rooms);
});

app.listen(9999, (err) => {
    if (err) {
        throw Error(err);
    }
    console.log('Server running on port 9999!');
});