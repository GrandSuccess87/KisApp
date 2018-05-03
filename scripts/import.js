require("dotenv").config();
var mongoose = require('mongoose');
var mongoose = require('mongoose'); 

const keys = require('./keys.js');
const db = require("../models");
const algoliasearch = require('algoliasearch');

var client = algoliasearch(keys.algoliaAppID, keys.alogoliaAdminKey);
// our defined index name
var index = client.initIndex('dev_questions');

//init connection to MongoDB
mongoose.connect('mongodb://localhost/KisAppDatabase');

console.log('Import Js Working');
// db.open('open', function(err, db){

    console.log('Connected to "KisAppDatabase"');
    //get the data in the collection
    const collectionName = 'question';
    // const collection = db.question(collectionName);
    // console.log('db.question throwing error: ' + db.question);
        // db.Question('Question', {strict: true}, function(err, find){
        // if(err) 
        // {
            // console.log('The "questions" collection does not exist. Unable to locate collection.' + err + 'Has Occurred')
        // } else {  

            // console.log('Connected to "questions" collection Successfully');
        // }
        //iterate over the whole collectioin using a cursor
        var batch = [];
        db.Question.find().forEach(function(doc){
            batch.push(doc);
            if (batch.length > 1000) {

                //send documents by batch of 1000 to Algolia
                index.addObjects(batch);
                batch = [];
            }
            console.log('Indexed: ' + batch.length);
        });

            // send the last batch
            if (batch.length > 0) {
                index.addObjects(batch);
            }
            console.log('Last Batch: ' + batch.length);
        
        db.on('close', test.done.bind('mydb'));
        db.close()    
    // });
// });
