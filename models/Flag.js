const mongoose = require("mongoose")
const colorSchema = require("./Color")

const flagSchema = new mongoose.Schema({
  country: {type: String, required: true},
  colors: [colorSchema]
})

const Flag = mongoose.model("Flag", flagSchema)

module.exports = Flag