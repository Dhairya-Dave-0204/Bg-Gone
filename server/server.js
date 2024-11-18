import express from "express"
import "dotenv/config"
import cors from "cors"
import connectDB from "./config/mongodb.js"
import userRouter from "./routes/userRoutes.js"
import imageRouter from "./routes/imageRoutes.js"

// APP CONFIGURATION
const PORT = process.env.PORT || 4000
const app = express()
await connectDB()

// INITIALIZE MIDDLEWARES
app.use(cors())
app.use(express.json())

// API ROUTES
app.get("/", (req, res) => {
    res.send("Api working")
})

app.use("/api/user", userRouter)

app.use("/api/image", imageRouter)

app.listen(PORT, () => {
    console.log("Server listening on port " + PORT); 
})