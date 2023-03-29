const multer = require('multer');
const sharp = require('sharp');

//image upload

const multerStorage = multer.memoryStorage();

//checking file type
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new Error('Please upload an image'));
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadSingleImage = upload.single('image');

exports.resizeImage = async (req, res, next) => {
  try {
    if (!req.file) return next();
    req.file.fileName = `${Date.now()}.jpeg`;

    await sharp(req.file.buffer)
      .resize(500, 500)
      .toFormat('jpeg')
      .jpeg({ quality: 80 })
      .toFile(`public/img/products/${req.file.fileName}`);
    next();
  } catch (e) {
    console.log(e);
  }
};
