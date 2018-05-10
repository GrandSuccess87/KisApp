const mongoose = require('mongoose');
const db = require("../models");
const router = require('express').Router();

router.get('/api/admin/questions', function (req, res) {
    // create a function that allows the user to login using react google login

    // search the algolia database for unanswered questions and present them to the admin
    index.search(adminQuestion, function (err, content) {
      if (err) {
        console.error(err);
      }
      res.json(content.hits.question)      
    });
});

// create a function so that the admin id matches the object id that was answered

module.exports = router;