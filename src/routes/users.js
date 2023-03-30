import app, { userController } from '../index.js'

// login
app.post('/user', userController.getUser.bind(userController))

// upload profile image
app.post('/user/:id', userController.uploadProfileImage.bind(userController))