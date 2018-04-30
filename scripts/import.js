require("dotenv").config();

var keys = require('./keys.js');
var algolia = require('algolia');

'use strict'

const algoliasearch = require('algoliasearch'),
    client = algoliasearch('applicationID','apikey'),
    // our defined index name
    index = client.initIndex('dev_questions')


// Full language list on GitHub Gist - http://bit.ly/2kp5Mus
let languages = ["Node.js, JavaScript"] 

languages.forEach(function(language){
    index.addObjects([{language: language}], function(err, indexed){
        console.log(indexed)
    })
})


// const algoliasearch = require('algoliasearch'),
//       client        = algoliasearch('applicationID', 'apiKey'),
//       index         = client.initIndex('programming-languages') 

// languages.forEach(function(language) {
//     index.addObjects([{ language: language }], function(err, indexed) {
// 	console.log(indexed)
//     })
// })