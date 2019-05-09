const express = require("express")
const app = express()
const Movies = require("../../models/movie")
const mongoose = require("mongoose")


app.get("/delete", (req, res)=> {
    let objectId = mongoose.Types.ObjectId(req.query.id)
    Movies.deleteOne({_id: objectId}, (err)=> {
        if(err) res.status(500).send("Movie was not deleted. Error.")
        else res.redirect("/")
    })
  })

module.exports = app