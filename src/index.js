import express from 'express'
import cors from 'cors'
import factory from './factories/userFactory.js'

const app = express()
app.use(express.json())
app.use(cors())

export const userController = await factory.initialize()

export default app