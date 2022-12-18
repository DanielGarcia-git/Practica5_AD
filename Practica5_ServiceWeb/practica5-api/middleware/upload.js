const Multer = require('multer');
const Util = require('util');
const ImageService =  require('../services/ImageService');

let storage = Multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, '/var/webapp/Practica_5/uploads');
    },
    filename: async (req, file, callback) => {
        console.log(file.originalname);
        await ImageService.getNextId(function(id) {
            console.log(id);
            callback(null, id.toString() + '.' + file.originalname.split('.').pop());
        });
    }
});

let uploadFile = Multer({
    storage: storage
}).single('file');

let uploadFileMiddleware = Util.promisify(uploadFile);

module.exports = uploadFileMiddleware;