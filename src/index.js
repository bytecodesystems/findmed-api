import factory from './factories/userFactory.js'
import express from 'express'
import multer from 'multer'
import cors from 'cors'

const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// setting multer store in database
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },

  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

export const upload = multer({ storage: storage })
export const userController = await factory.initialize()

export default app
