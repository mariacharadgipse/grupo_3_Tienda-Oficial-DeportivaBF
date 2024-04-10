const multer = require('multer');
const path = require('path')

const productStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/img/products'))
  },
  filename: function (req, file, cb) {
    let name = `${Date.now()}-img-${file.originalname}`
    cb(null, name)
  }
})

const userStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../public/img/users'))
  },
  filename: function (req, file, cb) {
    let name = `${Date.now()}-img-${file.originalname}`
    cb(null, name)
  }
})


const fileFilter = function (req, file, cb) {
  // Verifica si el archivo es una imagen
  console.log('tipo de archivo ', file.mimetype);
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('El archivo no es una imagen, vuelve atras e intenta de nuevo'), false);
  }
};

const uploadProduct = multer({
  storage: productStorage,
  fileFilter: fileFilter
});


const uploadUser = multer({
  storage: userStorage,
  fileFilter: fileFilter
});

module.exports = { uploadProduct, uploadUser };