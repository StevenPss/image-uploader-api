const Image = require('../models/Image');


exports.images_post_image = async (req, res) => {
    //file is not present
    if (!req.file) return res.status(400).json({message: 'Please upload an image!'});

    //init
    const image = new Image();

    //file is present
    if (req.file) {
        image.image = req.file.location;//req.file.path if using local storage "uploads/file.ext",
    }

    await image.save()
    .then((result) => {
        res.status(201).json({
            message: 'Image uploaded successfully!',
            storedImage: {
                _id: result._id,
                image: result.image,
                request: {
                    type: "GET",
                    url: 'http://localhost:3000/images/' + result._id
                }
            }
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
}