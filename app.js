const express = require("express")
const cors = require('cors')
const { connect } = require("mongoose")
const app = express()

app.use(cors())

app.use(express.json())

//db conection
const conn = require("./db/conn");  

conn();

//Routes
const routes = require("./routes/character");

app.use("/api",routes);

app.listen(3000, function() {
    console.log("Servidor Online!!")
})