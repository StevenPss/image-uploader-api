const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const uuid = require('uuid').v4;
const path = require('path');

const s3 = new aws.S3({apiVersion: '2006-03-01', accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_ACCESS_KEY_SECRET});

// accepted file types
const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/png' || file.mimetype == 'image/jpeg') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({
    storage: multerS3({
        s3,//es6 same as s3:s3
        bucket: 'devc-image-uploader-api',//add your s3 bucket name here
        metadata: (req, file, cb) => {
            cb(null, {fieldName: file.fieldname})
        },
        key: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            console.log('====================================');
            console.log(ext);
            console.log('====================================');
            cb(null, `${uuid()}${ext}`)
        }
    }),
    limits: {
        fileSize: 1024 * 1024 * 2 //files upto 2mb
    },
    fileFilter
});

module.exports = upload;