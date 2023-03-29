import app from './index.js'
import dotenv from 'dotenv'

// routes
import './routes/users.js'

dotenv.config()

app.listen(process.env.PORT || 3000, () => {
    const date = new Date()
    console.log(`Server started at ${date}.`)
})