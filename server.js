const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');

//SET UP EXPRESS
const app = express();

const port = process.env.PORT || 3000;


//Database connect
mongoose.connect(process.env.DB_CONNECTION, {  useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to db!'
));

//ROUTES
const imageRoutes = require('./api/routes/image');

// USE
app.use(cors());
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));
app.use('/images', imageRoutes);

//LISTEN to a particuler port
app.listen(port, () => console.log(`Listening on port ${port} .....`));
