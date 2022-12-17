const User = require('../Models/User');
const ResponseJSON = require('../Models/ResponseJSON');
const Config = require('../Config/Configuracion');
const UserService = require('../services/UserService');
var express = require('express');
var router = express.Router();

router.post('/login', async function(req, res, next) {
  var loginUser = User.buildUser(req.body.username, req.body.password, null);
  try {
    await UserService.getData(loginUser, function(response) {
      const result = ResponseJSON.buildResponseJSON(true, "Login correcto", "El usuario ha iniciado sesion correctamente", response)
      res.json(result);
    }, function(error) {
      const result = ResponseJSON.buildResponseJSON(false, "Login incorrecto", "El usuario no existe", {});
      res.json(result);
    });
  } catch (error) {
    console.error('Error durante el login', error.message);
    next(error);
  }
});

router.post('/register', async function(req, res, next) {
  var registerUser = User.buildUser(req.body.username, req.body.password, req.body.name);
  try {
    await UserService.isData(registerUser, function() {
      const result = ResponseJSON.buildResponseJSON(false, "Registro incorrecto", "El usuario ya existe en la base de datos", {});
      res.json(result);
    }, async function() {
      await UserService.setData(registerUser, function(response) {
        const result = ResponseJSON.buildResponseJSON(true, "Registro correcto", "El usuario se ha registrado correctamente", response);
        res.json(result);
      }, function(error) {
        const result = ResponseJSON.buildResponseJSON(false, "Registro incorrecto", "Error interno del servidor", error);
        res.json(result);
      });
    })
  } catch (error) {
    console.error('Error durante el registro', error.message);
    next(error);
  }
});

module.exports = router;
