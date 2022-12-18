const Image = require('../Models/Image');
const ImageService = require('../services/ImageService');
const ResponseJSON = require('../Models/ResponseJSON');
const Config = require('../Config/Configuracion');
const uploadFile = require('../middleware/upload');
var express = require('express');
var router = express.Router();

router.post('/register', async function(req, res, next) {
  try {
    await uploadFile(req, res);
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const formatedDate = day + '/' + month + '/' + year;
    var registerImage = Image.buildImage('', 
                                         req.body.title, 
                                         req.body.description, 
                                         req.body.keywords, 
                                         req.body.author, 
                                         req.body.creator, 
                                         formatedDate, 
                                         req.body.capture, 
                                         req.body.filename);
    await ImageService.setData(registerImage, function(response) {
      const result = ResponseJSON.buildResponseJSON(true, "Imagen registrada correctamente", "La imagen se ha registrado correctamente en el sistema", response);
      res.json(result);
    }, function(error) {
      const result = ResponseJSON.buildResponseJSON(false, "Imagen no registrada correctamente", "Error interno al servidor", error);
      res.json(result);
    });
  } catch (error) {
    console.error('Error durante el registro de imagen: ', error.message);
    next(error);
  }
});

// TODO: Hacer el cambio de archivo
router.post('/modify', async function(req, res, next) {
  console.log(req.body);
  var updateImage = Image.buildImage(req.body.id, 
                                     req.body.title, 
                                     req.body.description, 
                                     req.body.keywords, 
                                     req.body.author, 
                                     req.body.creator, 
                                     '', 
                                     req.body.capture, 
                                     '');
  try {
    await ImageService.updateData(updateImage, function(response) {
      console.log(response);
      const result = ResponseJSON.buildResponseJSON(true, "Imagen registrada correctamente", "La imagen se ha registrado correctamente en el sistema", response);
      res.json(result);
    }, function(error) {
      const result = ResponseJSON.buildResponseJSON(false, "Imagen no modificada correctamente", "La imagen a modificar contiene algun valor incorrecto", error);
      res.json(result);
    });
  } catch (error) {
    console.error('Error durante la modificacion de la imagen: ', error.message);
    next(error);
  }
});

//TODO: Eliminar la imagen de disco
router.post('/delete', async function(req, res, next) {
  console.log(req.body);
  var delImage = Image.buildImage(req.body.id, '', '', '', '', '', '', '', '');
  try {
    await ImageService.deleteData(delImage, function(response) {
      const result = ResponseJSON.buildResponseJSON(true, "Imagen eliminada correctamente", "La imagen se ha eliminado del sistema", response);
      res.json(result);
    }, function(error) {
      const result = ResponseJSON.buildResponseJSON(false, "Imagen no eliminada correctamente", "La imagen no existe", error);
      res.json(result);
    });
  } catch (error) {
    console.error('Error durante la eliminacion de la imagen: ', error.message);
    next(error);
  }
});

router.get('/download', async function(req, res, next) {
  var downloadImage = Image.buildImage(req.query.id, '', '', '', '', '', '', '', '');
  try {
    await ImageService.getData(downloadImage, function(response) {
      const filename = response.IdImage + '.' + response.FileName.split('.').pop();
      res.download(Config.DIRECTORY_UPLOAD + filename, response.FileName, (err) => {
        if (err) {
          const result = ResponseJSON.buildResponseJSON(false, "Imagen no descargada correctamente", "La imagen no existe en disco", err);
          res.json(result);
        }
      });
    }, function(error) {
      const result = ResponseJSON.buildResponseJSON(false, "Imagen no descargada correctamente", "La imagen no existe en el sistema", error);
      res.json(result);
    });
  } catch (error) {
    console.error('Error durante la eliminacion de la imagen: ', error.message);
    next(error);
  }
});

router.get('/list', async function(req, res, next) {
  try {
    await ImageService.getAllData(function(response) {
      const result = ResponseJSON.buildResponseJSON(true, "Listado de imagenes correcto", "Se han listado todas las imagenes del sistema", response);
      res.json(result);
    }, function(error) {
      const result = ResponseJSON.buildResponseJSON(false, "Listado de imagenes incorrecto", "Error interno del servidor", error);
        res.json(result);
    });
  } catch (error) {
    console.error('Error durante el listado de imagenes: ', error.message);
    next(error);
  }
});

router.get('/searchID', function(req, res, next) {

});

router.get('/searchTitle', function(req, res, next) {

});

router.get('/searchCreationDate', function(req, res, next) {

});

router.get('/searchAutor', function(req, res, next) {

});

router.get('/searchKeywords', function(req, res, next) {

});
    
module.exports = router;