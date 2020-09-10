const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller');

// create a new user
router.post('/', userController.create);

// Retrieve all users
router.get('/', userController.findAll);

// Retrieve user by a single Id
router.get('/', userController.findById);


module.exports = router
