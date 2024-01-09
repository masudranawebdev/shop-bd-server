// upload a image
const multer = require('multer');
const path = require('path');

// save file in upload folder
const storage = multer.diskStorage({
    destination: "category.images/",
    filename: function (req, file, cb) {
    const uniqueIdentifier = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const filename = uniqueIdentifier + path.extname(file.originalname);
    cb(null, filename);
  },
});

exports.CategoryImageUpload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const supportedImage = /png|jpg|webp|jpeg/;
        const extension = path.extname(file.originalname);

        if (supportedImage.test(extension)) {
            cb(null, true);
        } else {
            cb(new Error("Must be a png|jpg|webp|jpeg image"));
        }

    },
    limits: {
        fileSize: 5000000,
    }
})