const express = require('express');
const userController = require('../controllers/user.controllers')
const user = express.Router();

user.post('/login', userController.login);

module.exports = user