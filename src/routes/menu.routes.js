const express = require('express');
const menuController = require('../controllers/menu.controllers')
const menu = express.Router();

menu.get('/menu', menuController.menuGetAll);
menu.get('/menu/:id', menuController.menuGetById);
menu.post('/menu', menuController.menuCreate);
menu.put('/menu/:id', menuController.menuUpdateById);
menu.delete('/menu/:id', menuController.menuDeleteById);

module.exports = menu