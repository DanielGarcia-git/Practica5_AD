const Multer = require('multer');
const Util = require('util');
const Config = require('../Config/Configuracion');
const ImageService =  require('../services/ImageService');

let storage = Multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, Config.DIRECTORY_UPLOAD);
    },
    filename: async (req, file, callback) => {
        await ImageService.getNextId(function(id) {
            callback(null, id.toString() + '.' + file.originalname.split('.').pop());
        });
    }
});

let uploadFile = Multer({
    storage: storage
}).single('file');

let uploadFileMiddleware = Util.promisify(uploadFile);

module.exports = uploadFileMiddleware;