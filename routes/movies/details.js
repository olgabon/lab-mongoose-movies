const express = require("express")
const app = express()
const Movie = require("../../models/movie")
const mongoose = require("mongoose")


app.get('/details/:id', (req, res) => {
    Movie.findOne({_id:req.params.id})
    .populate("celebrity")
    .then(oneMovie => {
        console.log('onemovie', oneMovie)
    res.render('movies/details', { movies: oneMovie});
    })
    .catch(err => console.error('Impossible to retrieve celebrity info', err));
})


module.exports = app


