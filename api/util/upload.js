const multer = require('multer');
const uuid = require('uuid').v4;

// multer.diskStorage allows us to customize the file uploaded
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        const {originalname} = file;
        cb(null, `${uuid()}-${originalname}`);
    }
});

// accepted file types
const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/png' || file.mimetype == 'image/jpeg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

//file size expected
const upload = multer({
    storage, //es6 same as storage:storage
    limits: {
        fileSize: 1024 * 1024 * 5 //files upto 5mb
    },
    fileFilter
});

module.exports = upload;