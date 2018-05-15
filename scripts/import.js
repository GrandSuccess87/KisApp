require("dotenv").config();
const mongoose = require('mongoose');
//const keys = require('./keys.js');
const db = require("../models");
const algoliasearch = require('algoliasearch');
const router = require('express').Router();

var client = algoliasearch('QVNOD82220', '758f01b94805f53bec084e460796f7a6');
var index = client.initIndex('questions');
var questionsJSON = require('./questions.json');
const questionsController = require('../controllers/questionsController');

router.get('/topic/:topic', function(req, res) {
  console.log("test route")
  db.Question
    .find({'topic':req.params.topic})
    .then(dbModel => res.json(dbModel))
    .then(console.log(res))
    .catch(err => res.status(422).json(err));
});

router.post('/api/questions', function (req, res) {
  index.addObjects(questionsJSON, function (err, content) {
    if (err) {
      console.error(err);
    }
  });

  index.search(req.body.userQuestion, function (err, content) {
    if (err) throw err;
    // console.log(content.hits);
    res.json(content.hits);
    //
  });
});


module.exports = router;