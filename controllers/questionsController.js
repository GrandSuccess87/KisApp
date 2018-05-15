const db = require("../models");

// Defining methods for the questionsController
module.exports = {
  findAll: function(req, res) {
    db.Question
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Question
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByTopic: function(req, res) {
    db.Question
      .find({'topic':req.params.topic})
      .then(dbModel => res.json(dbModel))
      .then(console.log(res))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Question
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
