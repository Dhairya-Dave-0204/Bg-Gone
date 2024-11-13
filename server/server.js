import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './controllers/mongodb.js'

// APP CONFIG
const PORT = process.env.PORT || 4000
const app = express()
await connectDB()

// INITIALIZE MIDDLEWARES
app.use(express.json())
app.use(cors())

// API ROUTES
app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})