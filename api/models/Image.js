const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
    image: { type: String, required: true },
    bufferCommands: false
});

module.exports = mongoose.model('Image', imageSchema);