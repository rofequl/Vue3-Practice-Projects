const express = require("express");
const cors = require("cors");

const path = __dirname + '/views/dist/';
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

app.listen(PORT, () => console.log(`app started on port: ${PORT}`));