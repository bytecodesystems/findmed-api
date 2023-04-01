import app, { userController } from '../index.js'
import { upload } from '../index.js'

// login
app.post('/user', userController.loginUser.bind(userController))

// get user data
app.get('/user/:username', userController.getUser.bind(userController))

// upload profile image
app.put('/user/:id', upload.single('image'), userController.uploadProfileImage.bind(userController))