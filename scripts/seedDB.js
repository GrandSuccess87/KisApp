const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
    {
      useMongoClient: true
    }
  );

const question = [
    {
        id: 97,
        topic: "health",
        question: "What is a pap smear and when should I get one?",
        tags: "",
        answer: "A pap smear is an exam to screen for cervical cancer. A doctor will \'swab\' your cervix for cells to make sure they look normal. You should get a pap smear every three years and get your first one either after you turn 21 or after you are sexually active." ,
        objectID: 284916770
    }
];

db.Question
  .then(() => db.Question.collection.insertMany(questionSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
