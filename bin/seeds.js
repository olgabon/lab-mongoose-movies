const express = require("express")
const app = express()
const Celebrity = require("../models/celebrity")
const mongoose = require("mongoose")

const celebrities = [
{
  name: "Brad Pitt",
  occupation: "actor",
  catchPhrase: "Happiness is overrated. There has to be conflict in life.",
},
{
  name: "Johnny Depp",
  occupation: "actor",
  catchPhrase: "Music touches us emotionally, where words alone can't.",
},
{
  name: "Kit Harington",
  occupation: "actor",
  catchPhrase: "The best people to have power are the ones who don't want it."
},
]

Celebrity.create(celebrities, (err)=> {
  if (err) { throw(err) }
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close();
})

  module.exports = app