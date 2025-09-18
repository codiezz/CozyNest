const multer = require('multer');
const fs = require('fs');

const Storage = multer.diskStorage({
    destination: (req, file, callback) => {
        const uploadDir = './uploads';
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        callback(null, uploadDir);
    },
    filename: (req, file, callback) => {
        const filename = `image-${Date.now()}-${file.originalname}`;
        callback(null, filename);
    },
});

const uploads = multer({
    storage: Storage,
    limits: { fileSize: 2 * 1024 * 1024 }, // Limit file size to 2MB
    fileFilter: (req, file, callback) => {
        if (['image/png', 'image/jpg', 'image/jpeg'].includes(file.mimetype)) {
            callback(null, true);
        } else {
            callback(null, false);
            return callback(new Error('Only .png, .jpg, and .jpeg formats allowed!'));
        }
    },
}).single('photo');

module.exports = uploads;
