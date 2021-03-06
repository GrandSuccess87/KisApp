const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  id: { type: Number, required: true },
  topic: { type: String, required: true },
  tags: String,
  answer: { type: String, required: true },
  objectID: { type: Number, required: true}
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;