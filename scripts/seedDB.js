const mongoose = require("mongoose");
const db = require("../models");
import questions from "./questions.json";
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/KisAppDatabase"
  );

const questionSeed = questions;

db.Question
  .remove({})
  .then(() => db.Question.collection.insertMany(questionSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
