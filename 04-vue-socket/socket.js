let io;
exports.socketConnection = (server) => {
    io = require('socket.io')(server);
    io.on('connection', (socket) => {
        socket.on('message', (msg) => {
            io.emit('message back', msg)
        })
    });
};

