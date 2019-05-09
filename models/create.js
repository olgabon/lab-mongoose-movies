const mongoose = require("mongoose")
const Schema = mongoose.Schema

const MovieSchema = new Schema({
    title: { type: String, required: true},
    year: { type: String },
    director: {type: String },
    duration: {type: String},
    genre: {type: Array},
    rate: {type: String},
  });

const Movies = mongoose.model('create', MovieSchema);

module.exports = Movies