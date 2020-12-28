const express = require('express');
const multer = require('multer');
const uuid = require('uuid').v4;

//SET UP EXPRESS
const app = express();

//USE
app.use(express.static('public'));

//LISTEN to a particuler port
app.listen(3000, () => console.log("Listening on port 3000......"));