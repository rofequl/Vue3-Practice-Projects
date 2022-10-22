const {socketConnection} = require('./socket');
const express = require("express");
const app = express();
const server = require('http').createServer(app);
socketConnection(server);
const cors = require('cors')

const path = __dirname + '/views/dist/';
const PORT = process.env.PORT || 3001;
app.use(express.static(path))
app.use(cors());

app.use((req, res) => {
    res.sendFile(path + "index.html")
});

server.listen();