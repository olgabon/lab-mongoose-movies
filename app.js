const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Schema = mongoose.Schema
const hbs = require('hbs');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public/'))

mongoose.connect('mongodb://localhost/imdb', {useNewUrlParser: true}, (err)=> {
    if(!err)console.log("connected")
    else console.log("ERROR ERROR ERROR", err)
})



app.use("/", require("./routes/movies/moviesList"))
app.use("/", require("./routes/movies/details"))
app.use("/", require("./routes/movies/delete"))
app.use("/", require("./routes/movies/create"))
app.use("/", require("./routes/celebrities"))


 module.exports = app;


app.listen(3000, ()=> {
    console.log("Listening!!!!!")
})

