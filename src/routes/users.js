import app, { userController } from '../index.js'

// login
app.post('/user', userController.getUser.bind(userController))