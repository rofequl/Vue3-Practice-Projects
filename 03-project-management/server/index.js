require("dotenv").config();
require('./db')
const express = require("express");
const cors = require("cors");

const path = __dirname + '/views/';
const PORT = process.env.PORT || 3000;
const app = express();
// Init body-parser options (inbuilt with express)
app.use(express.json());
app.use(express.static(path))
app.use(cors());

// Frontend view html page serve
app.get('/', function (req, res) {
    res.sendFile(path + "index.html")
});
// Import API routes
const router = require('./routes/api.js')
// Use API Routes
app.use('/api', router)

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message, data});
});


app.listen(PORT, () => console.log(`app started on port: ${PORT}`));