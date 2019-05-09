
const express = require("express")
const app = express()
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const mongoose = require("mongoose")

app.get("/celebrities", (req, res)=> {
  Celebrity
      .find({})
      .then((results) => {
      console.log(results)
      res.render('celebrities', { celebrities: results })
      .catch(error => {
        res.send("ERROR", error);
      });
    })
})

app.get('/celebrities/:celeb_id', (req, res) => {
Celebrity.findById(req.params.celeb_id)
.populate("movies")
    .then(celebrities => {
        // console.log('Retrieved celebrity from DB: ', celebrities);
        res.render('celebrities/show', celebrities);
    })
    .catch(err => console.error('Impossible to retrieve celebrity info', err));
});

app.get('/new', (req, res) => {
  Movie.find({})
    .then((movies)=> {
      console.log(movies)
      res.render('celebrities/new', {movies: movies});
    })
})


app.post("/celebrities/new", (req, res)=> {
    const { name, occupation, catchPhrase, movies } = req.body;
    const newCelebrity = new Celebrity({ name, occupation, catchPhrase, movies });
    newCelebrity
    .save()
    .then( () => {
      res.redirect('/celebrities')
    })
    .catch(err => {
      res.render(err)
    })
}) 

app.post('/celebrities/:id/delete', (req, res) => {
    Celebrity.findByIdAndDelete(req.params.id)
      .then(() => {
        res.redirect('/celebrities');
      })
      .catch(err => {
        res.render(err)
    })
})
module.exports = app;

