const express = require("express")
const app = express()
const Movies = require("../../models/movie")
const mongoose = require("mongoose")
const celebrity = require("../../models/celebrity")


app.get("/create", (req, res) => {
  celebrity.find({})
    .then((result)=> {
      res.render('movies/create', {celebrity: result});
    })
})

app.post("/create", (req, res)=> {
  const addMovies = {
      title: req.body.title,
      year: req.body.year,
      director: req.body.director,
      duration: req.body.duration,
      genre: req.body.genre,
      rate: req.body.rate,
      celebrity: req.body.celebrity
  }
  const newMovie = new Movies(addMovies);
  newMovie.save()
  .then(() => {
      console.log('add ok');
      //render redirect to celebrities main page
      res.redirect('/');
  })
  .catch((err) => {
      console.log(err);
      res.render('movies/create');
  })
})



module.exports = app

