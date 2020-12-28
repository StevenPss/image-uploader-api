const express = require('express');
const router = express.Router();
const upload = require('../util/upload');

const ImagesController = require('../controllers/ImagesController');

// image in 'upload.single('image')' comes from the form input field with name of 'image'
router.post('/', upload.single('image'), ImagesController.images_post_image);

module.exports = router;