const mongoose = require('mongoose');
const db = require("../models");
const router = require('express').Router();

router.get('/api/admin/questions', function (req, res) {
    index.showObjects(adminQuestions, function (err, content) {
      if (err) {
        console.error(err);
      }
      res.json(content)      
    });
});

module.exports = router;