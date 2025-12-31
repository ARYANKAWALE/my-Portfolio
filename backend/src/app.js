import express from "express"
import cors from "cors"
const app = express()
// import cookieParser from "cookie-parser"

app.use(cors({
    origin:process.env.CORS_ORIGIN
}))

// app.use(express.json({ limit: "16kb" }))
// app.use(express.urlencoded({ extended: true, limit: "16kb" }))
// app.use(express.static("public"))
// app.use(cookieParser())


// routes

// import userRouter from "./routes/user.routes.js"

// app.use("/api/v1/user", userRouter)



export { app }