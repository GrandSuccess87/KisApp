require("dotenv").config();
const mongoose = require('mongoose');
//const keys = require('./keys.js');
const db = require("../models");
const algoliasearch = require('algoliasearch');
const router = require('express').Router();

var client = algoliasearch('YZR8H8JEYA', '8b1f7ac15d2dec622d1c39583ad47142');
var index = client.initIndex('questions');
var questionsJSON = require('./questions.json');

router.get('api/questions', function(req, res){
index.addObjects(questionsJSON, function(err, content) {
  if (err) {
    console.error(err);
  }
});

// const searchQuestion = req.query.userQuestion;

index.search(req.query.userQuestion, function(err, content, res) {
    console.log(content.hits);
    res.json(content.hits);
});

});

module.exports = router;

