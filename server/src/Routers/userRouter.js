const express = require('express')
const { createNewUser } = require('../Controllers/userController')
const userRouter = express.Router()

//userRoutes

userRouter.post('/login', signIn)
userRouter.post('register',createNewUser)