require("dotenv").config();
const mongoose = require('mongoose');
//const keys = require('./keys.js');
const db = require("../models");
const algoliasearch = require('algoliasearch');
const router = require('express').Router();

var client = algoliasearch('YZR8H8JEYA', '8b1f7ac15d2dec622d1c39583ad47142');
var index = client.initIndex('questions');
var questionsJSON = require('./questions.json');

router.post('/api/questions', function (req, res) {
  index.addObjects(questionsJSON, function (err, content) {
    if (err) {
      console.error(err);
    }
  });

  // const searchQuestion = req.query.userQuestion;

  index.search(req.body.userQuestion, function (err, content) {
    if (err) throw err;
    console.log('Error: ' + err);
    // console.log(content.hits);node
    res.json(content.hits);
    //
  });
});

module.exports = router;