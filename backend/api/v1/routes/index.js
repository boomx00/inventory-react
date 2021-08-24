const app = require('express').Router();
const userRoutes = require('./UserRoutes');
//  Routes
app.use('/user', userRoutes);

module.exports = app;