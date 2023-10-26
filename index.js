const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const userRouter = require("./routes/user")
require("dotenv").config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use("/users", userRouter)

const uri = process.env.ATLAS_URI

mongoose.connect(uri)

const connection = mongoose.connection

connection.once("open", () => {
  console.log("MongoDB database connection successfully established")
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})
