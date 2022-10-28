const express = require("express");
const path = require('path');

const PORT = process.env.PORT || 3000;
const app = express();
// Init body-parser options (inbuilt with express)
app.use('/',express.static('public'))

// Frontend view html page serve


app.listen(PORT, () => console.log(`app started on port: ${PORT}`));

module.exports = app;