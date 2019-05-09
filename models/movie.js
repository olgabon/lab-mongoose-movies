const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  year: String,
  director: String,
  duration: String,
  genre: Array,
  rate: String,
  celebrity: [{type: mongoose.Schema.Types.ObjectId, ref: "Celebrity"}]
});

const Movies = mongoose.model("Movies", movieSchema);

module.exports = Movies;