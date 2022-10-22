const express = require("express");
const app = express();

const cors = require('cors')

const path = __dirname + '/views/dist/';
const PORT = process.env.PORT || 3001;
app.use(express.static(path))
app.use(cors());

app.get('/', function (req, res) {
    res.sendFile(path + "index.html")
});

app.listen(PORT, () => console.log(`app started on port: ${PORT}`));