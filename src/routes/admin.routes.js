const express = require('express');
const userController = require('../controllers/admin.controllers');

const admin = express.Router();

admin.post('/user-create', userController.userCreate);
admin.get('/user-get/:id', userController.userGetById);
admin.get('/user-get', userController.userGetAll);
admin.put('/user-update/:id', userController.userUpdateById);
admin.delete('/user-delete/:id', userController.userDeleteById);

module.exports = admin