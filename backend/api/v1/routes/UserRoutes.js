const app = require('express').Router();
const userController = require('../controllers/UserController')

// create user
app.post('/register-user',userController.createUser)
// edit user
app.put('/edit-user',userController.editUser)

module.exports = app;