
const express = require("express")
const app = express()
const Movies = require("../../models/movie")
const mongoose = require("mongoose")

app.get("/", (req, res)=> {
  Movies.find({}, (err, result)=> {
      res.render("index", {movies: result})
  })
})

module.exports = app