const express = require('express');
const { showRegister, registerUser, showLogin, loginUser, logout } = require('../controller/user.controller');
const userRoutes = express.Router();

userRoutes.post("/register", registerUser);
userRoutes.get("/register", showRegister);

userRoutes.post('/login', loginUser)
userRoutes.get("/login", showLogin);

userRoutes.get("/logout", logout);

module.exports = userRoutes;