const express = require('express')
const app = express()

const mlRoutes = require("./routes/mlRoutes");

const cors = require('cors')

require('dotenv').config()
const PORT = process.env.PORT || 4000;

//start server
app.listen(PORT, () => {
    console.log(`Server successfullt started at port: ${PORT}`)
})


app.use(express.json())

// app.use(cors({
//     origin: "http://localhost:3000",
//     credentials: true
// }))

app.use("/api/v1/ml", mlRoutes);

//home route
app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "Server is up and running"
    })
})